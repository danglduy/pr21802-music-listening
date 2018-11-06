json.partial! "song", song: @song
if @song.file.attached?
  json.file rails_blob_path(@song.file, disposition: "attachment")
else
  json.file nil
end
