Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :events
    resources :tickets, only: [:create]
    resources :bookmarks, only: [:create]

    delete '/bookmarks', to: 'bookmarks#destroy'
  end
end
