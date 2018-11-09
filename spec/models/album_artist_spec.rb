require "rails_helper"

RSpec.describe AlbumArtist, type: :model do
  it { is_expected.to belong_to(:album) }
  it { is_expected.to belong_to(:artist) }
end
