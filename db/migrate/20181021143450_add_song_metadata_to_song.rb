class AddSongMetadataToSong < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :duration, :integer
    add_column :songs, :bit_rate, :integer
    add_column :songs, :track_no, :integer, default: 1
    add_column :songs, :year, :integer
  end
end
