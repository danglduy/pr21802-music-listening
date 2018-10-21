class Album < ApplicationRecord
  has_many :songs, dependent: :destroy
  has_many :album_artists, dependent: :destroy
  has_many :artists, through: :album_artists
end
