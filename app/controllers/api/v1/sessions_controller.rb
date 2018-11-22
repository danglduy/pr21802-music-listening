module Api
  module V1
    class SessionsController < Api::V1::ApiController
      include ActionController::HttpAuthentication::Token::ControllerMethods
      acts_as_token_authentication_handler_for User, fallback_to_devise: false

      def create
        success, user = User.valid_login? params[:email], params[:password]
        if success
          render json: user.as_json(only: [:id, :authentication_token]),
            status: :created
        else
          head :unauthorized
        end
      end

      def destroy
        if current_user
          current_user.reset_authentication_token!
          head :ok
        else
          head :unauthorized
        end
      end
    end
  end
end
