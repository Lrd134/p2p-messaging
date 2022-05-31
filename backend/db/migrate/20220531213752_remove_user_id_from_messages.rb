class RemoveUserIdFromMessages < ActiveRecord::Migration[6.1]
  def up
    remove_column :messages, :user_id
  end
  
  def down
    add_column :messages, :user_id, :integer
  end
end
