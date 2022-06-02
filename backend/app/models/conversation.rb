class Conversation < ApplicationRecord
  belongs_to :messages
  accepts_nested_attributes_for :messages
end