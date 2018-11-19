ActiveAdmin.register Playlist do
  permit_params :name, :user_id, playlist_songs_attributes: [:id, :index, :song_id]

  controller do
    def scoped_collection
      super.includes :songs
    end
  end

  filter :name
  filter :created_at

  form do |f|
    f.inputs do
      f.input :name
      f.input :user
    end

    f.has_many :playlist_songs, all_destroy: true do |playlist_song|
      playlist_song.input :index
      playlist_song.input :song
    end

    f.actions
  end

  index do
    selectable_column
    id_column
    column :name
    column :user
    actions
  end

  show do
    attributes_table do
      row :name
      row :user
    end
    if playlist.songs.present?
      table_for playlist.songs do
        column :track_no
        column :name do |song|
          link_to song.name, admin_song_path(song)
        end
        column :artist
        column :duration
        column :listen do |song|
          link_to t(".listen"), song_attachment_url(song) if song.file.present?
        end
      end
    end
  end
end
