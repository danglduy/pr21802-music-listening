class AttachmentsController < ApplicationController
  before_action :set_song, only: [:show, :destroy]

  def show
    type =
      case @song.file.content_type
      when "audio/x-flac"
        "audio/flac"
      else
        @song.file.content_type
      end

    send_file @song.file.path, disposition: "inline", type: type
  end

  def destroy
    @song.remove_file!
    if @song.save!
      respond_to do |format|
        format.html do
          flash[:danger] = t ".attachment_deleted"
          redirect_back fallback_location: admin_root_url
        end
      end
    else
      respond_to do |format|
        format.html do
          flash[:danger] = t ".attachment_delete_error"
          redirect_back fallback_location: admin_root_url
        end
      end
    end
  end

  private
  def set_song
    @song = Song.find_by id: params[:song_id]
  end
end
