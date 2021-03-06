class MessagesController < ApplicationController
  before_action :set_message, only: %i[show delete update]
  
    def index

      allowedParams = params.require(:user).permit(:username, :password, :limit)
      allowedParams[:limit] || allowedParams[:limit] = 10
      @user = User.find_by_username(allowedParams[:username])
      if @user && @user.authenticate(allowedParams[:password])
        @message = Message.where('creator_id = ?', @user.id).limit(allowedParams[:limit])
        @message2 = Message.where('target_id = ?', @user.id).limit(allowedParams[:limit])
        @message = @message2 + @message
        @message = @message.sort_by { | msg | msg.created_at.to_i }
        options = { is_collection: true }
        render json: serialize_message(options)
        return
      end
        render json: {
          error: "Resource restricted to verified users."
        }.to_json

    end
  
    def show
      
    end
  
    def create
      @message = Message.create message_params
      render json: serialize_message
    end
  
    def update
  
    end
  
  
    def delete
  
    end
  
    private
    

    def message_params
      params.require(:message).permit(:text)
    end
  
    def serialize_message options = nil
      MessageSerializer.new(@message, options).serialized_json
    end
  
  end