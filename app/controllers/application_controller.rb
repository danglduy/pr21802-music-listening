class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :authenticate_user!

  rescue_from CanCan::AccessDenied do |exception|
    redirect_to root_url, alert: exception.message
  end

  protected
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_in) do |u|
      u.permit :name, :email,
        :password, :remember_me
    end
    devise_parameter_sanitizer.permit(:account_update) do |u|
      u.permit(:name, :email,
        :password, :password_confirmation, :current_password)
    end
  end
end
