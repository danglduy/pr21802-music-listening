class Category < ApplicationRecord
  has_many :children, class_name: Category.name, foreign_key: :parent_id
  belongs_to :parent, class_name: Category.name, foreign_key: :parent_id, optional: true
  has_many :song_categories, dependent: :destroy
  has_many :songs, through: :song_categories

  validates_presence_of :name
end
