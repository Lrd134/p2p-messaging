class CreateConversation < ActiveRecord::Migration[6.1]
  def up
    create_table :conversations do |t|
      t.string :name
      t.string :description
      t.timestamps
    end
  end

  def down
    drop_table :conversations
  end
end
