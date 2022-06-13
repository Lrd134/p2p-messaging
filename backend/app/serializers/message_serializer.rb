class MessageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :text, :conversation_id
  attribute :creator do | object |
    {
      :givenName => object.creator.username,
      :userId => object.creator.id,
      :sentAt => object.creator.created_at
    }
  end
  attribute :target do | object |
    {
      :givenName => object.target.username,
      :userId => object.creator.id,
      :sentAt => object.target.created_at
    }
  end
end