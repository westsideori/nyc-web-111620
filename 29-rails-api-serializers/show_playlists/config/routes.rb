Rails.application.routes.draw do

  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'

  # resources :shows
  # resources :playlists
  # resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
