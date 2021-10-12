Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :lists do
      resources :items 
    end

    resources :items do 
      resources :notes 
    end
  end

end