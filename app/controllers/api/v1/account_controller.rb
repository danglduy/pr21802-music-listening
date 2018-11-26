module Api
  module V1
    class AccountController < Api::V1::ApiController
      def index
        respond_to do |format|
          format.json
        end
      end
    end
  end
end
