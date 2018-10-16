Rails.application.routes.draw do
  get "player", to: "player#index"

  namespace :api do
    namespace :v1 do
      resources :songs, only: [:index, :show]
      resources :albums, only: [:index, :show]
      resources :artists, only: [:index, :show]
    end
  end
end
