class User < ApplicationRecord
  has_secure_password
  has_many :messages, dependent :nullify
  validates :username, presence: true, uniqueness: true, length: { min: 3, max: 20 }
end