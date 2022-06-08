class User < ApplicationRecord
  has_secure_password

  has_many :outgoing_messages, :foreign_key => :creator_id,
    :class_name => 'Message'
  has_many :creators, :through => :outgoing_messages,
    :source => :creator
  has_many :incoming_messages, :foreign_key => :target_id,
    :class_name => 'Message'
  has_many :targets, :through => :incoming_messages,
    :source => :target
  has_many :incoming_conversations, :foreign_key => :target_id,
    :class_name => 'Conversation'
    has_many :outgoing_conversations, :foreign_key => :creator_id,
      :class_name => 'Conversation'
  validates_with UsernameValidator
  validates :username, presence: true, uniqueness: true, length: { minimum: 3, maximum: 20 }
end