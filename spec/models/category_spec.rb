require "rails_helper"

RSpec.describe Category, type: :model do
  it { is_expected.to validate_presence_of(:name) }

  it { is_expected.to have_many(:song_categories) }
  it { is_expected.to have_many(:songs) }
  it { is_expected.to have_many(:album_categories) }
  it { is_expected.to have_many(:albums) }
end
