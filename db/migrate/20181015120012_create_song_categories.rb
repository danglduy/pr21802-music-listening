class CreateSongCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :song_categories do |t|
      t.references :song, foreign_key: true
      t.references :category, foreign_key: true

      t.timestamps
    end
  end
end
