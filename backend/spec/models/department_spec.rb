require 'rails_helper'

RSpec.describe '部署モデル', type: :model do
  it 'は、新規作成できる' do
    expect { FactoryBot.create(:department) }.to change(Department, :count).by(1)
  end

  it 'は、名前が必須である' do
    one = FactoryBot.build(:department, name: nil)
    one.valid?
    expect(one.errors.messages[:name]).to eq ['を入力してください']
  end

  it 'は、名前の最大255文字の上限チェックができる' do
    one = FactoryBot.build(:department, name: 'a' * 256)
    one.valid?
    expect(one.errors.messages[:name]).to eq ['は255文字以内で入力してください。']
  end
end
