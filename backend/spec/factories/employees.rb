# == Schema Information
#
# Table name: employees
#
#  id            :bigint           not null, primary key
#  join_year     :integer          not null
#  name          :string(255)      not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  department_id :integer          not null
#
FactoryBot.define do
  factory :employee do
    department_id                { 1 }
    sequence(:name, "従業員1")
    join_year                    { '2020' }
  end
end
