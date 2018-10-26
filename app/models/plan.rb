class Plan < ApplicationRecord
  has_many :payments, dependent: :destroy
  belongs_to :package

  acts_as_paranoid

  scope :order_amount_asc, ->{order(amount: :asc)}
end
