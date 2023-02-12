Rails.application.routes.draw do
  devise_for :users
  root 'root#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :jobs, only: [:index, :new, :create, :destroy]
  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    namespace :v1 do
      resources :jobs
    end
  end

end
