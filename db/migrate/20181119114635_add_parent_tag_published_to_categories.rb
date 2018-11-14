class AddParentTagPublishedToCategories < ActiveRecord::Migration[5.2]
  def change
    add_column :categories, :parent_id, :integer
    add_column :categories, :tag, :integer
    add_column :categories, :published, :boolean
  end
end
