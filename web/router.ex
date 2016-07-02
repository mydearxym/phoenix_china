defmodule PhoenixChina.Router do
  use PhoenixChina.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :browser_session do
    plug Guardian.Plug.VerifySession
    plug Guardian.Plug.LoadResource
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug Guardian.Plug.VerifyHeader
    plug Guardian.Plug.LoadResource
  end

  scope "/", PhoenixChina do
    pipe_through [:browser, :browser_session]

    get "/", PageController, :index

    get "/signup", UserController, :new
    post "/signup", UserController, :create

    get "/signin", SessionController, :new
    post "/signin", SessionController, :create
    get "/signout", SessionController, :delete

    resources "/posts", PostController
  end

  # Other scopes may use custom stacks.
  # scope "/api", PhoenixChina do
  #   pipe_through :api
  # end
end