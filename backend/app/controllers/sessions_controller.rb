class SessionsController < ApplicationController
  def login
    byebug
    @user = User.find_by(username: user_params[:username].downcase)
    session[:user_id] = @user.id unless @user.authenticate(user_params[:password])
  end

  private

    def current_user
    end

end