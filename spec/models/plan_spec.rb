require "rails_helper"

RSpec.describe Plan, type: :model do
  it { is_expected.to validate_presence_of(:amount) }

  it { is_expected.to have_many(:payments) }
  it { is_expected.to belong_to(:package) }
end
