class Song < ApplicationRecord
  belongs_to :artist
  belongs_to :album
  has_many :playlist_songs, dependent: :destroy
  has_many :playlists, through: :playlist_songs
  has_many :song_categories, dependent: :destroy
  has_many :categories, through: :song_categories
  has_many :likes, dependent: :destroy
  has_many :users, through: :likes

  mount_uploader :file, FileUploader

  scope :order_track_no_asc, ->{order track_no: :asc}

  validates_presence_of :name
end
