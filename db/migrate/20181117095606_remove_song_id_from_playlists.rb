class RemoveSongIdFromPlaylists < ActiveRecord::Migration[5.2]
  def change
    remove_reference :playlists, :song, foreign_key: true
  end
end
