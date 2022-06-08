class AddUsersToConversations < ActiveRecord::Migration[6.1]
  def change
    add_column :conversations, :creator_id, :integer
    add_column :conversations, :target_id, :integer
  end
end
