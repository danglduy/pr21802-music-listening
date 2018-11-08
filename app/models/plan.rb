class Plan < ApplicationRecord
  has_many :payments, dependent: :destroy
  belongs_to :package

  validates_presence_of :amount

  acts_as_paranoid

  scope :order_amount_asc, ->{order(amount: :asc)}
end
