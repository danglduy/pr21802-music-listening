json.partial! "song", song: @song
if @song.file.present?
  json.file song_attachment_path @song
else
  json.file nil
end
