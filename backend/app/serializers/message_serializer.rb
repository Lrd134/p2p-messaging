class MessageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id
end