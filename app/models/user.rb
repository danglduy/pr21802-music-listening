class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :validatable,
    :confirmable, :lockable, :timeoutable, :omniauthable

  rolify

  has_many :user_artists, dependent: :destroy
  has_many :artists, through: :user_artists
  has_many :likes, dependent: :destroy
  has_many :songs, through: :likes
  has_many :playlists, dependent: :destroy
end
