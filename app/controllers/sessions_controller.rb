class SessionsController < ApplicationController
def create
  user = Polluser.from_omniauth(request.env['omniauth.auth'])
  cookies[:user_id] = user.id
  flash[:success] = "Welcome, #{user.name}!"
  redirect_to polls_path
end

def destroy
  cookies.delete(:user_id)
  flash[:success] = "Goodbye!"
  redirect_to polls_path
end

def auth_fail
  render text: "You've tried to authenticate via #{params[:strategy]}, but the following error
occurred: #{params[:message]}", status: 500
end

end