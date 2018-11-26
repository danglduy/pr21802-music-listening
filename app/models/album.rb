class Album < ApplicationRecord
  has_many :songs, dependent: :destroy
  has_many :album_artists, dependent: :destroy
  has_many :artists, through: :album_artists
  has_many :album_categories, dependent: :destroy
  has_many :categories, through: :album_categories

  mount_uploader :cover, CoverUploader

  scope :order_year_dsc, ->{order year: :desc}

  validates_presence_of :name

  def related_albums
    categories.sample.albums.where.not(id: id).first(5) if categories.present?
  end
end
