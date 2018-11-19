class CreateSlides < ActiveRecord::Migration[5.2]
  def change
    create_table :slides do |t|
      t.string :align
      t.text :content

      t.timestamps
    end
  end
end
