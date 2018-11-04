class CheckEmailController < ApplicationController
  skip_before_action :authenticate_user!
  def check_user
    email = params[:email]
    user = User.find_by email: email
    if user.present?
      render plain: "1"
    else
      render plain: "0"
    end
  end
end
