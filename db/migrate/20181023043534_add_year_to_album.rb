class AddYearToAlbum < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :year, :integer
  end
end
