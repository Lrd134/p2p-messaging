class Message < ApplicationRecord
  belongs_to :conversation
  belongs_to :user
  validates :text, presence: true
  
  def self.all_by_user_id id
    Message.where(
      'user_id == ?',
      id
    )
  end
end