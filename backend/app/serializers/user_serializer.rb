class UserSerializer
  include FastJsonapi::ObjectSerializer
  set_key_transform :camel_lower
  attribute :given_name, &:username
  attributes :incoming_messages, :outgoing_messages
end