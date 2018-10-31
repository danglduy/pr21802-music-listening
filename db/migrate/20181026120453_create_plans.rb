class CreatePlans < ActiveRecord::Migration[5.2]
  def change
    create_table :plans do |t|
      t.references :package, foreign_key: true
      t.integer :duration
      t.integer :amount

      t.timestamps
    end
  end
end
