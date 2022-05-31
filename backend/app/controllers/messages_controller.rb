class MessagesController < ApplicationController
  before_action :set_message, only: %i[show delete update]
  
    def index
      @message = Message.all_by_user_id params.permit(:user_id)[:user_id]
      options = { is_collection: true }
      render json: serialize_message(options)
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
    

    def message_params
      params.require(:message).permit(:text)
    end
  
    def serialize_message options = nil
      MessageSerializer.new(@message, options).serialized_json
    end
  
  end