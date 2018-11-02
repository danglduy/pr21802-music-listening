class PaymentsController < ApplicationController
  before_action :set_payment, only: [:show, :edit, :update]
  before_action :set_subscription
  before_action :set_plan, only: [:create, :update]
  before_action :check_last_pending, only: :new

  def index
  end

  def show
  end

  def new
    @payment = Payment.new
  end

  def create
    subscription =
      if @subscription && !@subscription.expired?
        @subscription
      else
        Subscription.not_expired.find_or_create_by(
          user: current_user,
          package: @plan.package
        )
      end

    payment = subscription.payments.create payment_params.merge(
      user: current_user,
      status: :pending
    )

    payment.make_charge params[:stripeToken]

    flash[:notice] = t ".payment_success"
    redirect_to account_path
  rescue Stripe::CardError => e
    flash[:error] = e.message
    redirect_to new_account_payment_path
  end

  def edit
  end

  def update
    @payment.update payment_params
    @payment.make_charge params[:stripeToken]

    flash[:notice] = t ".payment_success"
    redirect_to account_path
  rescue Stripe::CardError => e
    flash[:error] = e.message
    redirect_to new_account_payment_path
  end

  private
  def set_payment
    @payment = Payment.find_by id: params[:id]
    return if @payment.present?
    flash[:notice] = t "payments.payment_not_found"
    redirect_to account_path
  end

  def payment_params
    params.require(:payment).permit :plan_id
  end

  def set_subscription
    return if params[:subscription_id].blank?
    @subscription = Subscription.find_by id: params[:subscription_id]
    return if @subscription.present?
    flash[:notice] = t "payments.subscription_not_found"
    redirect_to account_path
  end

  def set_plan
    @plan = Plan.find_by id: params[:payment][:plan_id]
    return if @plan.present?
    flash[:notice] = t "payments.plan_not_found"
    redirect_to account_path
  end

  def check_last_pending
    return unless (subscription = set_subscription) &&
      subscription.payment_pending?
    flash[:notice] = t ".redirect_last_pending_payment"
    redirect_to edit_account_subscription_payment_path(
      subscription, subscription.payments.pending.last
    )
  end
end
