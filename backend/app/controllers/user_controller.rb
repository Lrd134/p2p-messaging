class UserController < ApplicationController
  set_user only: %w[show delete update]

  def index
    @user = User.all
    render :json, serialize_user { is_collection: true }
  end

  def show

  end

  def create

  end

  def update

  end


  def delete

  end

  private
  
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

  def serialize_user options = nil
    UserSerializer.new(@user, options).serialized_json
  end

  def set_user
    @user = User.find_by(username: params.require(:user).permit(:username))
  end

end