artist1 = Artist.find_or_create_by(
  name: "Lady Gaga",
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
  name: "Mariah Carey",
  info: "A very great artist born in 19xx"
)

album2 = Album.find_or_create_by(
  name: "Greatest Hits"
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
user.save!
