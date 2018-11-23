class PlaylistSong < ApplicationRecord
  belongs_to :playlist
  belongs_to :song

  validates_presence_of :index

  after_save :update_playlist

  scope :index_asc, ->{order index: :asc}

  private
  def update_playlist
    playlist.update updated_at: Time.now
  end
end
