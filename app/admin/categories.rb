ActiveAdmin.register Category do
  permit_params :name, :parent_id, :tag, :published

  filter :name
  filter :parent
  filter :tag
  filter :published

  config.sort_order = "tag_asc"
  # sortable tree: false, sorting_attribute: :tag

  index do
    selectable_column
    id_column
    column :name
    actions
  end

  show do |_|
    attributes_table do
      row :parent
      row :id
      row :name
      row :published
      row :tag
    end

    if category.albums.present?
      table_for category.albums do
        h4 t(".albums")
        column :name do |albums|
          link_to albums.name, admin_album_path(albums)
        end
        column :disc_no
        column :year
      end
    end

    if category.songs.present?
      table_for category.songs.order_album_no do
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
        column :listen do |song|
          link_to t(".listen"), song_attachment_url(song) if song.file.present?
        end
      end
    end

  end

  form do |f|
    f.inputs "Category Details" do
      f.input :parent
      f.input :name
      f.input :published
      f.input :tag
    end
    actions
  end
end
