FactoryBot.define do
  factory :employee do
    department_id                { 1 }
    sequence(:name, "従業員1")
    join_year                    { '2020' }
  end
end
