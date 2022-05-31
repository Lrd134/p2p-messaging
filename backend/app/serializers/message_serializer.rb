class MessageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :text
end