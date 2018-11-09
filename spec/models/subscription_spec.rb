require "rails_helper"

RSpec.describe Subscription, type: :model do
  it { is_expected.to have_many(:payments) }
  it { is_expected.to belong_to(:user) }
  it { is_expected.to belong_to(:package) }
end
