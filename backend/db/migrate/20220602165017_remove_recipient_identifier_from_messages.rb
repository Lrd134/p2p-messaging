class RemoveRecipientIdentifierFromMessages < ActiveRecord::Migration[6.1]
  def change
    remove_column :messages, :recipient_identifier, :string
  end
end
