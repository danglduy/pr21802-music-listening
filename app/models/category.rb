class Category < ApplicationRecord
  has_many :song_categories, dependent: :destroy
  has_many :songs, through: :song_categories
end
