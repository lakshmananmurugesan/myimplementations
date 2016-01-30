class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :book_name
      t.references :article, index: true

      t.timestamps
    end
  end
end
