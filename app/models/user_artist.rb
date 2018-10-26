class UserArtist < ApplicationRecord
  belongs_to :user
  belongs_to :artist

  acts_as_paranoid
end
