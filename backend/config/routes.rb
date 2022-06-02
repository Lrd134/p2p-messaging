Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  resources :users, only: %i[index]
  post '/signup', to: 'users#create'
  post '/login', to: 'users#login'
  get '/profile', to: 'users#show'
  post '/profile/edit', to: 'users#update'
  post '/profile/delete', to: 'users#delete'

  get '/messages', to: 'conversations#index'
end
