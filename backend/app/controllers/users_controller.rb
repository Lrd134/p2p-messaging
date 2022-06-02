class UsersController < ApplicationController
before_action :set_user, only: %i[show delete update]

  def index
    @user = User.all
    options = { is_collection: true }
    render json: serialize_user(options)
  end

  def show
    if @user.authenticate(user_params[:password])
      render json: serialize_user
    end
  end

  def create
    @user = User.create user_params
    render json: serialize_user
  end

  def update
    @user.update(user_params)
    render json: serialize_user
  end


  def delete
    @user_name = @user.name
    @user.destroy
    render json: {
      :message => "#{@user_name} Destroyed"
    }.to_json
  end

  private
  
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

  def serialize_user options = nil
    UserSerializer.new(@user, options).serialized_json
  end

  def set_user
    @user = User.find_by(username: user_params[:username])
  end

end