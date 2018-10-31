class Like < ApplicationRecord
  belongs_to :user
  belongs_to :song

  acts_as_paranoid
end
