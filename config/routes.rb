Rails.application.routes.draw do
  get "player", to: "player#index"

  namespace :api do
    namespace :v1 do
      resources :songs, only: [:index, :show]
      resources :albums, only: [:index, :show]
      resources :artists, only: [:index, :show]
    end
  end
  devise_for :users, path: '', path_names: { sign_in: 'login', 
    sign_out: 'logout', edit: 'profile'}
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
