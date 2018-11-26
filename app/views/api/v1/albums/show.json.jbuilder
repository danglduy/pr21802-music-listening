json.partial! "album", album: @album
json.related @album.related_albums do |album|
  json.partial! "album", album: album
end
