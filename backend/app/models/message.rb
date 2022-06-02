class Message < ApplicationRecord
  belongs_to :conversation
  belongs_to :creator, :class_name => 'User'
  belongs_to :target, :class_name => 'User'
  validates :text, presence: true
  
  def self.all_by_user_id id
    Message.where(
      'user_id == ?',
      id
    )
  end
end