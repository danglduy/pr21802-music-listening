json.call album, :id, :name, :disc_no, :year, :created_at, :updated_at
if album.cover.present?
  json.cover album.cover_url
  json.thumb album.cover_url(:thumb)
else
  json.cover nil
  json.thumb nil
end
