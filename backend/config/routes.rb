Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  resources :users, only: %i[index]
  post '/login', to 'users#login'
  post '/profile', to 'users#show'
  post '/profile/edit', to 'users#update'
end
