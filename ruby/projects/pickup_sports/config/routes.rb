Rails.application.routes.draw do
  # localhost:3000/users
  get '/users', to: 'users#index'

  # localhost:3000/users/id
  get '/users/:id', to: 'users#show'

  # localhost:3000/users
  post '/users', to: 'users#create'

  # localhost:3000/users/id
  put '/users/:id', to: 'users#update'

  # localhost:3000/users/id
  delete '/users/:id', to: 'users#destroy'

  resources :users do
    get 'posts', to: 'users#posts_index'
  end

  resources :posts
end
