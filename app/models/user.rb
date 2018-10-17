class User < ApplicationRecord
  rolify
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :validatable,
    :confirmable, :lockable, :timeoutable
  has_many :user_artists, dependent: :destroy
  has_many :artists, through: :user_artists
  has_many :likes, dependent: :destroy
  has_many :songs, through: :likes
  has_many :playlists, dependent: :destroy

  def admin?
    has_role? :admin
  end

  def client?
    has_role? :client
  end
end
