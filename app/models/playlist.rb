class Playlist < ApplicationRecord
  belongs_to :user
  belongs_to :song

  acts_as_paranoid
end
