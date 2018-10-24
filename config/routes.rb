Rails.application.routes.draw do
  root "pages#index"

  get "player", to: "player#index"

  ActiveAdmin.routes(self)
  devise_for :users, path: "", path_names: {
    sign_in: "login", sign_out: "logout", edit: "profile", sign_up: "signup"
  }

  devise_scope :user do
    resource :registration,
      only: [:new, :create, :edit, :update],
      path: "users",
      controller: "devise/registrations",
      as: :user_registration do
        get :cancel
      end
  end

  resources :attachments, only: :destroy

  namespace :api do
    namespace :v1 do
      resources :songs, only: [:index, :show]
      resources :albums, only: [:index, :show]
      resources :artists, only: [:index, :show]
    end
  end
end
