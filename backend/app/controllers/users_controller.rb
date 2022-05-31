class UsersController < ApplicationController
before_action :set_user, only: %i[show delete update]

  def index
    @user = User.all
    options = { is_collection: true }
    render json: serialize_user(options)
  end

  def show

  end

  def create
    @user = User.create user_params
    render json: serialize_user
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