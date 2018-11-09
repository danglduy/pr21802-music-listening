Rails.application.routes.draw do
  devise_for :users, path: "",
    path_names: {
    sign_in: "login", sign_out: "logout",
    edit: "profile", confirmation: "confirmations"
  }, controllers: {
    omniauth_callbacks: "omniauth_callbacks",
    registrations: "registrations"
  }

  get "player", to: "player#index"
  get "pages/home"
  root to: "pages#home", as: :root
  get "/check-user" => "check_email#check_user"

  ActiveAdmin.routes(self)

  resources :attachments, only: :destroy
  resource :user, path: :account, as: :account, only: :show do
    resources :payments, only: [:new, :create, :edit, :update]
    resources :subscriptions, only: :show do
      resources :payments, only: [:new, :edit, :index, :show]
    end
  end

  namespace :api do
    namespace :v1 do
      resources :artists, only: [:index, :show] do
        resources :albums, only: :index
        resources :songs, only: :index
      end
      resources :albums, only: [:index, :show] do
        resources :songs, only: :index
      end
      resources :songs, only: [:index, :show]
    end
  end
end
