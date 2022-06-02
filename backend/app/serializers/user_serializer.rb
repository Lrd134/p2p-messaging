class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :creators, :targets
end