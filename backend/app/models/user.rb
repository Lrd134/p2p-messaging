class User < ApplicationRecord
  has_secure_password
  has_many :messages, dependent: :nullify
  validates_with UsernameValidator
  validates :username, presence: true, uniqueness: true, length: { minimum: 3, maximum: 20 }
end