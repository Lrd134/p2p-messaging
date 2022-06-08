class MessageSerializer
  include FastJsonapi::ObjectSerializer
  attribute :text
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