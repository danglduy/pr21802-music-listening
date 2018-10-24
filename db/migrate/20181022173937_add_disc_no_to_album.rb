class AddDiscNoToAlbum < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :disc_no, :integer, default: 1
  end
end
