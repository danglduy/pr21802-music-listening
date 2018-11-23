require 'rails_helper'

RSpec.describe AlbumCategory, type: :model do
  it { is_expected.to belong_to(:album) }
  it { is_expected.to belong_to(:category) }
end
