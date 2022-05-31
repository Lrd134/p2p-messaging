class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :messages
end