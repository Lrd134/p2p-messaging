class CreateMessages < ActiveRecord::Migration[6.1]
  def up
    create_table :messages do |t|
      add_reference :users, foreign_key: true
      t.text :text
      t.foreign_key 
      t.timestamps
    end
  end

  def down
    drop_table :messages
  end
end
