class Artist < ApplicationRecord
  has_many :user_artists, dependent: :destroy
  has_many :users, through: :user_artists
  has_many :songs, dependent: :destroy
  has_many :album_artists, dependent: :destroy
  has_many :albums, through: :album_artists

  mount_uploader :cover, CoverUploader

  validates_presence_of :name

  def related_artists
    if albums.present?
      albums.sample&.categories.sample.albums.sample(5).map(&:artists)
        .map(&:first).reject{|artist| artist.blank? || artist.id == id}
    elsif songs.present?
      songs.sample&.categories.sample.albums.sample(5).map(&:artists)
        .map(&:first).reject{|artist| artist.blank? || artist.id == id}
    else
      none
    end
  end

  def contributed_albums
    Song.where(artist_id: id).group(:album_id).map(&:album)
      .reject do |contributed_album|
        contributed_album.blank? || album_ids.include?(contributed_album.id)
      end
  end
end
