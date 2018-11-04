ActiveAdmin.register Category do
  permit_params :name

  filter :name
  filter :created_at

  index do
    selectable_column
    column :id
    column :name
    actions
  end

  show do |_|
    attributes_table do
      row :id
      row :name
    end
  end

  form do |f|
    f.inputs do
      f.input :name
    end
    f.actions
  end
end
