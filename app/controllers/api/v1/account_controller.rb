module Api
  module V1
    class AccountController < Api::V1::ApiController
      before_action :check_current_user

      def index
        respond_to do |format|
          format.json
        end
      end

      private
      def check_current_user
        @user_id = current_user&.id
      end
    end
  end
end
