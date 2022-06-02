class AddRecipientIdentifierToMessages < ActiveRecord::Migration[6.1]
  def change
    add_column :messages, :recipient_identifier, :string
  end
end
