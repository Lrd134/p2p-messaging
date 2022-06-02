class MessageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :creator, :target, :conversation
end