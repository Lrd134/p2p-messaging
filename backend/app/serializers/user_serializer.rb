class UserSerializer
  include FastJsonapi::ObjectSerializer
  set_key_transform :camel_lower
  attribute :uuid, &:id
  attribute :given_name, &:username
end