class Payment < ApplicationRecord
  belongs_to :user
  belongs_to :plan, optional: true
  belongs_to :subscription, optional: true

  enum status: {pending: 0, completed: 1}

  acts_as_paranoid

  def make_charge stripe_token
    description = "User ##{user.id} - #{plan.name} - #{Time.now}"
    Stripe::Charge.create(
      amount: plan.amount * 100,
      currency: "usd",
      source: stripe_token,
      description: description
    )
    update status: :completed, completed_at: Time.now
    update_subscription_expired
  end

  def update_subscription_expired
    if subscription.expired_at.blank?
      subscription.update expired_at: plan.duration.days.from_now
    else
      new_expired_at = subscription.expired_at + plan.duration.days
      subscription.update expired_at: new_expired_at
    end
  end
end
