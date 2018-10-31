class AddDeletedAtToPlanAndPackage < ActiveRecord::Migration[5.2]
  def change
    add_column :packages, :deleted_at, :datetime
    add_index :packages, :deleted_at
    add_column :plans, :deleted_at, :datetime
    add_index :plans, :deleted_at
  end
end
