class CreateAlbumArtist < ActiveRecord::Migration[5.2]
  def change
    create_table :album_artists do |t|
      t.references :album, foreign_key: true
      t.references :artist, foreign_key: true
    end
  end
end
