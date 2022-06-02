class ConversationSerializer
  include FastJsonapi::ObjectSerializer
  attribute :messages
end