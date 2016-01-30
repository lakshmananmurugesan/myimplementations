class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception


  def current_user
    @current_user ||= Polluser.find_by(id: cookies[:user_id]) if cookies[:user_id]
  end

  helper_method :current_user

  private
  def after_sign_out_path_for(resource_or_scope)
    movies_path
  end

  def after_sign_in_path_for(resource_or_scope)
    movies_path
  end
end
