class Playlist < ApplicationRecord
  belongs_to :user
  has_many :playlist_songs, inverse_of: :playlist, dependent: :destroy
  has_many :songs, through: :playlist_songs

  validates_presence_of :name

  accepts_nested_attributes_for :playlist_songs, reject_if: :all_blank,
    allow_destroy: true

  acts_as_paranoid
end
