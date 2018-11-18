require "rails_helper"

RSpec.describe PlaylistSong, type: :model do
  it { is_expected.to validate_presence_of(:index) }

  it { is_expected.to belong_to(:playlist) }
  it { is_expected.to belong_to(:song) }
end
