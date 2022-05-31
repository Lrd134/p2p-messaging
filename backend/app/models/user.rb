class User < ApplicationRecord
  has_secure_password
  has_many :messages, dependent: :nullify
  validates_with UsernameValidator
  validates :username, presence: true, uniqueness: true, length: { minimum: 3, maximum: 20 }
  def incoming_messages 
    Message.find_by_username(self.username)
  end
end