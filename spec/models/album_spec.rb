require "rails_helper"

RSpec.describe Album, type: :model do
  it { is_expected.to validate_presence_of(:name) }

  it { is_expected.to have_many(:songs) }
  it { is_expected.to have_many(:album_artists) }
  it { is_expected.to have_many(:artists) }
end
