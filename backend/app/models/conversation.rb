class Conversation < ApplicationRecord  
  has_many :messages
  belongs_to :creator, :class_name => 'User'
  belongs_to :target, :class_name => 'User'
  accepts_nested_attributes_for :messages
end