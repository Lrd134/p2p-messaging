class CreateConversationAssociations < ActiveRecord::Migration[6.1]
  def change
    create_table :conversation_associations do |t|
      t.integer :creator
      t.integer :target
      t.timestamps
    end
  end
end
