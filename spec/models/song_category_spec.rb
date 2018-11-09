require "rails_helper"

RSpec.describe SongCategory, type: :model do
  it { is_expected.to belong_to(:song) }
  it { is_expected.to belong_to(:category) }
end
