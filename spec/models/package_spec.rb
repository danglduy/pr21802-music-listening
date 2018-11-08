require "rails_helper"

RSpec.describe Package, type: :model do
  it { is_expected.to validate_presence_of(:name) }

  it { is_expected.to have_many(:plans) }
  it { is_expected.to have_many(:subscriptions) }
  it { is_expected.to have_many(:subscribers) }
end
