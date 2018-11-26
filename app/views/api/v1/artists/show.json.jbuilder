json.partial! "artist", artist: @artist
json.related @artist.related_artists do |artist|
  json.partial! "artist", artist: artist
end
json.contributed_albums @artist.contributed_albums do |album|
  json.partial! "api/v1/albums/album", album: album
end
