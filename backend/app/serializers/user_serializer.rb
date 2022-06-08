class UserSerializer
  include FastJsonapi::ObjectSerializer
  set_key_transform :camel_lower
  attribute :given_name, &:username
  attributes :targets, :creators
end