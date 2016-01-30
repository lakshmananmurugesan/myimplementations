class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :firstname
      t.string :lastname
      t.integer :mno
      t.string :emailid
      t.string :gender

      t.timestamps
    end
  end
end
