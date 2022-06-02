class MessageSerializer
  include FastJsonapi::ObjectSerializer
  attribute :text
  attribute :creator do | object |
    {
      :givenName => object.creator.username,
      :sentAt => object.creator.created_at
    }
  end
  attribute :target do | object |
    {
      :givenName => object.target.username,
      :sentAt => object.target.created_at
    }
  end
end