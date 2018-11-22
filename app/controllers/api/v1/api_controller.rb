module Api
  module V1
    class ApiController < ActionController::API
      def present_or_not_found object
        return if object.present?
        render body: nil, status: :not_found
      end

      def current_user
        authenticate_with_http_token do |token, options|
          User.find_by(authentication_token: token)
        end
      end
    end
  end
end
