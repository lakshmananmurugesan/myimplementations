class CreatePollusers < ActiveRecord::Migration
  def change
    create_table :pollusers do |t|
      t.string :name
      t.string :image_url
      t.string :uid

      t.timestamps
    end
    add_index :pollusers, :uid
  end
end
