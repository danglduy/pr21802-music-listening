module Api
  module V1
    class ApiController < ApplicationController
      skip_before_action :authenticate_user!

      def present_or_not_found object
        return if object.present?
        render body: nil, status: :not_found
      end
    end
  end
end
