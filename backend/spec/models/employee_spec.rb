require 'rails_helper'

RSpec.describe '従業員モデル', type: :model do
  it 'は、新規作成できる' do
    department = FactoryBot.create(:department)
    expect { FactoryBot.create(:employee, department_id: department.id) }.to change(Employee, :count).by(1)
  end

  it 'は、部署IDが必須である' do
    one = FactoryBot.build(:employee, department_id: nil)
    one.valid?
    expect(one.errors.messages[:department_id]).to eq ['を入力してください']
  end

  it 'は、名前が必須である' do
    one = FactoryBot.build(:employee, name: nil)
    one.valid?
    expect(one.errors.messages[:name]).to eq ['を入力してください']
  end

  it 'は、入社年度が必須である' do
    one = FactoryBot.build(:employee, join_year: nil)
    one.valid?
    expect(one.errors.messages[:join_year]).to eq ['を入力してください']
  end

  it 'は、入社年度が数字4桁のチェックができる' do
    one = FactoryBot.build(:employee, join_year: 'test')
    one.valid?
    expect(one.errors.messages[:join_year]).to eq ['は4文字で入力してください。', 'は数値で入力してください。']

    one = FactoryBot.build(:employee, join_year: 123)
    one.valid?
    expect(one.errors.messages[:join_year]).to eq ['は4文字で入力してください。']

    one = FactoryBot.build(:employee, join_year: 12345)
    one.valid?
    expect(one.errors.messages[:join_year]).to eq ['は4文字で入力してください。']
  end
end
