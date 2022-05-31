Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  resources :users, except: [:new, :update] do
    resources :messages, except: [:new, :update]
  end

end
