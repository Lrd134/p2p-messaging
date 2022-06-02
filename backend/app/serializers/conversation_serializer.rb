class ConversationSerializer
  include FastJsonapi::ObjectSerializer
  has_many :messages
end