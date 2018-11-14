ActiveAdmin.register Album do
  permit_params :name, :disc_no, :year, :cover, artist_ids: []
  config.sort_order = "name_asc"

  controller do
    def scoped_collection
      super.includes :songs, :artists
    end
  end

  filter :name
  filter :created_at

  form do |f|
    f.inputs do
      f.input :name
      f.input :artists
      f.input :year
      f.input :disc_no
      f.input :cover, as: :file
    end
    f.actions
  end

  index do
    selectable_column
    id_column
    column :cover do |album|
      image_tag album.cover_url(:thumb) if album.cover.present?
    end
    column :name
    column :album_artists do |album|
      album.artists.map do |artist|
        raw link_to(artist.name, admin_artist_path(artist))
      end.join(", ").html_safe
    end
    column :year
    column :disc_no
    actions
  end

  show do
    attributes_table do
      row :cover do |album|
        image_tag album.cover_url if album.cover.present?
      end
      row :name
      row :disc_no
      row :album_artists do
        album.artists.map do |artist|
          raw link_to(artist.name, admin_artist_path(artist))
        end.join(", ").html_safe
      end
      row :year
      row :total_tracks do
        album.songs.count
      end
    end
    if album.songs.present?
      table_for album.songs.order_track_no_asc do
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
