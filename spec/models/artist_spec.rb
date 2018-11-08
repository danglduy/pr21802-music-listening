require "rails_helper"

RSpec.describe Artist, type: :model do
  it { is_expected.to validate_presence_of(:name) }

  it { is_expected.to have_many(:user_artists) }
  it { is_expected.to have_many(:users) }
  it { is_expected.to have_many(:songs) }
  it { is_expected.to have_many(:album_artists) }
  it { is_expected.to have_many(:albums) }
end
