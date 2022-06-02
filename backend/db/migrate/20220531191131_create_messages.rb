class CreateMessages < ActiveRecord::Migration[6.1]
  def up
    create_table :messages do |t|
      t.text :text
      t.timestamps
    end
  end

  def down
    drop_table :messages
  end
end
