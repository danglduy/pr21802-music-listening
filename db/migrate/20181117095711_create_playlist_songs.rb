class CreatePlaylistSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :playlist_songs do |t|
      t.integer :index
      t.references :playlist, foreign_key: true
      t.references :song, foreign_key: true
      t.datetime :deleted_at

      t.timestamps
    end
    add_index :playlist_songs, :index
  end
end
