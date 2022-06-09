Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: %i[index]
  post '/signup', to: 'users#create'
  post '/login', to: 'users#login'
  get '/profile', to: 'users#show'
  post '/profile/edit', to: 'users#update'
  post '/profile/delete', to: 'users#delete'

  post '/messages', to: 'messages#index'
  post '/messages/new', to: 'messages#create'
  post '/messages/edit', to: 'messages#update'
  post '/messages/delete', to: 'messages#delete'

  post '/conversations/edit', to: 'conversations#update'
  post '/conversations/delete', to: 'conversations#delete'
end
