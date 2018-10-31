class CreatePayments < ActiveRecord::Migration[5.2]
  def change
    create_table :payments do |t|
      t.references :user, foreign_key: true
      t.references :subscription, foreign_key: true
      t.references :plan, foreign_key: true
      t.integer :status, default: 0
      t.datetime :completed_at

      t.timestamps
    end
  end
end
