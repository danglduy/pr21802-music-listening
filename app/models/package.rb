class Package < ApplicationRecord
  has_many :plans, dependent: :destroy
  has_many :subscriptions, dependent: :destroy
  has_many :subscribers, through: :subscriptions, source: :user

  validates_presence_of :name

  acts_as_paranoid
end
