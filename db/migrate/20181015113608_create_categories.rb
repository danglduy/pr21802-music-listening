class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :name
      t.integer :tag
      t.integer :parent_id
      t.boolean :published

      t.timestamps
    end
  end
end
