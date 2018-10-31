class SubscriptionsController < ApplicationController
  def show
    @subscription = Subscription.find_by id: params[:id]
  end
end
