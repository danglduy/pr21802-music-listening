class Song < ApplicationRecord
  belongs_to :artist
  belongs_to :album
  has_many :playlists, dependent: :destroy
  has_many :song_categories, dependent: :destroy
  has_many :categories, through: :song_categories
  has_many :likes, dependent: :destroy
  has_many :users, through: :likes

  has_one_attached :file

  scope :order_track_no_asc, ->{order track_no: :asc}
end
