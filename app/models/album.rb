class Album < ApplicationRecord
  has_many :songs, dependent: :destroy
  has_many :album_artists, dependent: :destroy
  has_many :artists, through: :album_artists

  scope :order_year_dsc, ->{order year: :desc}

  validates_presence_of :name
end
