class UsersController < ApplicationController
before_action :set_user, only: %i[login delete update]
skip_forgery_protection

  def index
    @user = User.all
    options = { is_collection: true }
    render json: serialize_user(options)
  end

  def show
    @user = User.find_by(username: params.permit(:username)[:username].downcase)
    render json: UserSerializer.new(@user).serialized_json
  end

  def login
    render json: serialize_user
  end

  def create
    byebug
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
    @user = User.find_by(username: user_params[:username].downcase)
    redirect_to '404' unless @user.authenticate(user_params[:password])
  end

end