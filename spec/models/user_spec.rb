require "rails_helper"

RSpec.describe User, type: :model do
  it { is_expected.to validate_presence_of(:name) }
  it { is_expected.to validate_length_of(:name) }
  it { is_expected.to validate_presence_of(:email) }
  it { is_expected.to validate_length_of(:email) }
  it { is_expected.to validate_presence_of(:password) }
  it { is_expected.to validate_length_of(:password) }
  it { is_expected.to validate_confirmation_of(:password) }

  it { is_expected.to have_many(:user_artists) }
  it { is_expected.to have_many(:artists) }
  it { is_expected.to have_many(:likes) }
  it { is_expected.to have_many(:songs) }
  it { is_expected.to have_many(:playlists) }
  it { is_expected.to have_many(:subscriptions) }
end
