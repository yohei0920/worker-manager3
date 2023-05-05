require 'rails_helper'

RSpec.describe 'MutationType#delete_employee' do
  before do
    @query = <<-MUTATION
      mutation deleteEmployee($id: ID!) {
        deleteEmployee(input: { id: $id }) {
          id
        }
      }
    MUTATION
  end

  it 'は、削除ができること' do
    department = FactoryBot.create(:department)
    employee   = FactoryBot.create(:employee, department_id: department.id, name: '従業員')
    expect do
      MyappSchema.execute(@query, variables: { id: employee.id })
    end.to change(Employee, :count).by(-1)
  end
end
