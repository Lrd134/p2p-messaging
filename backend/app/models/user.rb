class User < ApplicationRecord
  has_secure_password

  has_many :creators, :foreign_key => :creator_id,
    :class_name => 'Message'
  has_many :outgoing_messages, :through => :creators,
    :source => :creator
  has_many :targets, :foreign_key => :target_id,
    :class_name => 'Message'
  has_many :incoming_messages, :through => :targets,
    :source => :target
  validates_with UsernameValidator
  validates :username, presence: true, uniqueness: true, length: { minimum: 3, maximum: 20 }
end