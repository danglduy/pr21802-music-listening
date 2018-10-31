artist1 = Artist.find_or_create_by(
  name: "Artist 01",
  info: "A great singer born in 19xx"
)

album1 = Album.find_or_create_by(
  name: "Album 02"
)

Song.find_or_create_by(
  name: "Track 01",
  artist: artist1,
  album: album1
)

Song.find_or_create_by(
  name: "Track 02",
  artist: artist1,
  album: album1
)

artist2 = Artist.find_or_create_by(
  name: "Artist 02",
  info: "A very great artist born in 19xx"
)

album2 = Album.find_or_create_by(
  name: "Album 03"
)

Song.find_or_create_by(
  name: "Track 03",
  artist: artist2,
  album: album2
)

Song.find_or_create_by(
  name: "Track 04",
  artist: artist2,
  album: album2
)

user = User.find_or_initialize_by(
  name: "123123",
  email: "123@123.com"
)
user.password = "123123"
user.skip_confirmation!
user.add_role :admin unless user.has_role? :admin
user.save!

metadata_files = Dir.glob("import/*.flac.json")
metadata_files.each do |metadata_file|
  metadata = JSON.parse(File.read(metadata_file))

  imported_filename = metadata["format"]["filename"]
  imported_duration = metadata["format"]["duration"]
  # imported_bit_rate = metadata["format"]["bit_rate"]
  imported_tags = metadata["format"]["tags"].transform_keys!(&:downcase)
  imported_title = imported_tags["title"]
  imported_album = imported_tags["album"]
  imported_genre = imported_tags["genre"]
  # imported_composer = imported_tags["composer"]
  imported_track_no =
    if imported_tags["track"].blank?
      1
    else
      imported_tags["track"].split("/").first
    end
  imported_year = imported_tags["date"]
  imported_artist = imported_tags["artist"]
  imported_album_artist = imported_tags["album_artist"] || imported_artist
  imported_disc_no =
    if imported_tags["disc"].blank?
      1
    else
      imported_tags["disc"].split("/").first
    end
  album = Album.find_or_create_by name: imported_album,
    disc_no: imported_disc_no
  album.year = imported_year if album.year.blank?
  album.save!
  artist = Artist.find_or_create_by name: imported_artist
  album_artist = Artist.find_or_create_by name: imported_album_artist

  AlbumArtist.find_or_create_by album: album, artist: album_artist
  if imported_genre.present?
    category = Category.find_or_create_by name: imported_genre
  end

  song = Song.find_or_create_by(
    name: imported_title,
    duration: imported_duration,
    artist: artist,
    album: album,
    track_no: imported_track_no,
    year: imported_year
  )

  SongCategory.find_or_create_by(
    song: song,
    category: category
  ) if category.present?

  song.file.attach(
    io: File.open(imported_filename),
    filename: imported_track_no.to_s + ". " + imported_title + ".flac"
  ) unless song.file.attached?
end

package = Package.find_or_create_by name: "Premium"
Plan.find_or_create_by package: package, name: "Premium 1 month",
  duration: 30, amount: 5
Plan.find_or_create_by package: package, name: "Premium 6 months",
  duration: 180, amount: 30
Plan.find_or_create_by package: package, name: "Premium 12 year",
  duration: 365, amount: 50
