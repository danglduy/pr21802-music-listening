class AddCoverToArtists < ActiveRecord::Migration[5.2]
  def change
    add_column :artists, :cover, :string
  end
end
