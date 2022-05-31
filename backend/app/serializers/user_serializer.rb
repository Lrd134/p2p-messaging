class UserSerializer
  include FastJsonapi::ObjectSerializer
  include IncomingMessageHelper
  attributes :username
  has_many :messages, if: Proc.new { |record| record.messages.any? }

  attribute :incoming_messages do | user | 
    incoming_messages user 
  end
end