ActiveAdmin.register Artist do
  permit_params :name, :info, :cover

  controller do
    def scoped_collection
      super.includes :albums, :songs
    end
  end

  filter :name
  filter :info
  filter :created_at

  form do |f|
    f.inputs do
      f.input :name
      f.input :info
      f.input :cover, as: :file
    end
    f.actions
  end

  index do
    selectable_column
    id_column
    column :cover do |artist|
      image_tag artist.cover_url(:thumb) if artist.cover.present?
    end
    column :name
    column :info
    column :total_tracks do |artist|
      artist.songs.count
    end
    actions
  end

  show do
    attributes_table do
      row :cover do |artist|
        image_tag artist.cover_url if artist.cover.present?
      end
      row :name
      row :info
      row :total_albums do |artist|
        artist.albums.count
      end
      row :total_tracks do |artist|
        artist.songs.count
      end
    end

    if artist.albums.present?
      table_for artist.albums do
        h4 t(".albums")
        column :name do |albums|
          link_to albums.name, admin_album_path(albums)
        end
        column :disc_no
        column :year
      end
    end

    if artist.songs.present?
      table_for artist.songs do
        h4 t(".songs")
        column :name do |song|
          link_to song.name, admin_song_path(song)
        end
        column :album
        column :disc_no do |song|
          song.album.disc_no
        end
        column :year do |song|
          song.album.year
        end
      end
    end
  end
end
