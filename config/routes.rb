Rails.application.routes.draw do
  devise_for :users, path: "", path_names: {sign_in: "login",
    sign_out: "logout", edit: "profile", confirmation: "confirmations"},
    controllers: {omniauth_callbacks: "omniauth_callbacks",
    registrations: "registrations", sessions: "users/sessions"}
    
  get "player", to: "player#index"
  get "pages/home"
  root to: "pages#home", as: :root

  ActiveAdmin.routes(self)

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
