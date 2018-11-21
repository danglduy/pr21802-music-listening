json.call artist, :id, :name, :info, :created_at, :updated_at
if artist.cover.present?
  json.cover artist.cover_url
  json.thumb artist.cover_url(:thumb)
else
  json.cover nil
  json.thumb nil
end
