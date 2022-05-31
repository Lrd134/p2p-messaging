class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username
  has_many :messages, if: Proc.new { |record| record.messages.any? }
end