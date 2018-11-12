ActiveAdmin.register Song do
  permit_params :track_no, :name, :artist_id, :album_id, :year, :file,
    category_ids: []

  config.sort_order = "name_asc"

  controller do
    def scoped_collection
      super.includes :album, :artist, :categories
    end
  end

  filter :name
  filter :artist, collection: ->{Artist.order :name}
  filter :album, collection: ->{Album.order :name}
  filter :categories

  form partial: "form"

  index do
    selectable_column
    column :name do |songs|
      best_in_place songs, :name, as: :input, url: [:admin, songs]
    end
    column :album
    column :album_disc_no do |songs|
      songs.album.disc_no
    end
    column :artist
    column :duration
    column :file do |song|
      link_to t(".listen"), song_attachment_url(song) if song.file.present?
    end
    actions
  end

  show do
    attributes_table do
      row :name
      row :artist
      row :album
      row :file do |song|
        link_to t(".listen"), song_attachment_url(song) if song.file.present?
      end
      row :genres do
        song.categories.map do |category|
          raw link_to(category.name, admin_category_path(category))
        end.join(", ").html_safe
      end
    end
  end
end
