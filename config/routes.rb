Rails.application.routes.draw do
  root "pages#index"

  get "player", to: "player#index"

  namespace :api do
    namespace :v1 do
      resources :songs, only: [:index, :show]
      resources :albums, only: [:index, :show]
      resources :artists, only: [:index, :show]
    end
  end

  devise_for :users, path: "", path_names: { sign_in: "login",
    sign_out: "logout", edit: "profile"}
end
