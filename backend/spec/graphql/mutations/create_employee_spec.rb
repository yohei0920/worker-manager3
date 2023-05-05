require 'rails_helper'

RSpec.describe 'MutationType#employee' do
  before do
    @query = <<-MUTATION
      mutation createEmployee($departmentId: ID!, $name: String!, $joinYear: Int!) {
        createEmployee(input: { departmentId: $departmentId, name: $name, joinYear: $joinYear }) {
          employee {
            id
            departmentId
            name
            joinYear
          }
        }
      }
    MUTATION

  end

  it 'は、新規作成ができること' do
    department = FactoryBot.create(:department)
    expect do
      MyappSchema.execute(@query, variables: { departmentId: department.id, name: '開発部', joinYear: 2020 })
    end.to change(Employee, :count)
  end
end
