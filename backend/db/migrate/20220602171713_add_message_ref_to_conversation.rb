class AddMessageRefToConversation < ActiveRecord::Migration[6.1]
  def change
    add_reference :conversations, :messages, null: false, foreign_key: true
  end
end
