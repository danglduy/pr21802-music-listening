class AddDeletedAt < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :deleted_at, :datetime
    add_index :users, :deleted_at
    add_column :subscriptions, :deleted_at, :datetime
    add_index :subscriptions, :deleted_at
    add_column :payments, :deleted_at, :datetime
    add_index :payments, :deleted_at
    add_column :user_artists, :deleted_at, :datetime
    add_index :user_artists, :deleted_at
    add_column :playlists, :deleted_at, :datetime
    add_index :playlists, :deleted_at
    add_column :likes, :deleted_at, :datetime
    add_index :likes, :deleted_at
  end
end
