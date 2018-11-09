class Category < ApplicationRecord
  has_many :song_categories, dependent: :destroy
  has_many :songs, through: :song_categories

  validates_presence_of :name
end
