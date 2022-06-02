class CreateMessages < ActiveRecord::Migration[6.1]
  def up
    create_table :messages do |t|
      t.text :text
      t.integer :conversation_id
      t.integer :creator_id
      t.integer :target_id
      t.timestamps
    end
  end

  def down
    drop_table :messages
  end
end
