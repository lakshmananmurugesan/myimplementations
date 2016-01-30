class AddFieldsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :name, :string
    add_column :users, :image_url, :string
    add_column :users, :uid, :string
    add_index :users, :uid
  end
end
