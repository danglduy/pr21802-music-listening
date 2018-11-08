require "rails_helper"

RSpec.describe Song, type: :model do
  it { is_expected.to validate_presence_of(:name) }

  it { is_expected.to belong_to(:artist) }
  it { is_expected.to belong_to(:album) }

  it { is_expected.to have_many(:playlists) }
  it { is_expected.to have_many(:song_categories) }
  it { is_expected.to have_many(:categories) }
  it { is_expected.to have_many(:likes) }
  it { is_expected.to have_many(:users) }
end
