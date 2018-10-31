class Subscription < ApplicationRecord
  belongs_to :user
  belongs_to :package
  has_many :payments, dependent: :destroy

  acts_as_paranoid

  scope :expired, ->{where("expired_at < ?", Time.now)}
  scope :not_expired, ->{where.not(id: expired)}

  after_create :create_payment

  def expired?
    initialized? && (expired_at < Time.now)
  end

  def initialized?
    expired_at.present?
  end

  def payment_pending?
    payments.pending.count.positive?
  end

  private
  def create_payment
    payments.create(
      user: user,
      status: :pending
    )
  end
end
