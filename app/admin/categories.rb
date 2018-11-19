ActiveAdmin.register Category do
  permit_params :name, :parent_id, :tag, :published

  filter :name
  filter :parent
  filter :tag
  filter :published

  config.sort_order = 'tag_asc'
  #sortable tree: false, sorting_attribute: :tag

  index do
    label :name
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
  end

  form do |f|
    f.inputs 'Category Details' do
      f.input :parent
      f.input :name
      f.input :published
      f.input :tag
    end
    actions
  end
end
