class CreateAlbumCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :album_categories do |t|
      t.references :album, foreign_key: true
      t.references :category, foreign_key: true

      t.timestamps
    end
  end
end
