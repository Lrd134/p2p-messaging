class ConversationsController < ApplicationController
  before_action :set_conversation, only: %i[show delete update]
  
    def index
      @conversation = Conversation.all
      options = { is_collection: true }
      render json: serialize_conversation(options)
    end
  
    def show
  
    end
  
    def create
      @conversation = Conversation.create conversation_params
      render json: serialize_conversation
    end
  
    def update
      
    end
  
  
    def delete
  
    end
  
    private
    
    def conversation_params
      params.require(:conversation).permit(:name, :description, message: [ :text ])
    end
  
    def serialize_conversation options = nil
      ConversationSerializer.new(@conversation, options).serialized_json
    end
  
    def set_conversation
      @conversation = Conversation.find_by(conversationname: params.require(:conversation).permit(:conversationname))
    end
  
  end