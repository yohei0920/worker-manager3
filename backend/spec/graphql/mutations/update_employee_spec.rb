require 'rails_helper'

RSpec.describe 'MutationType#update_employee' do
  before do
    @query = <<-MUTATION
      mutation updateEmployee($id: ID!, $departmentId: ID!, $name: String!, $joinYear: Int!) {
        updateEmployee(input: { id: $id, departmentId: $departmentId, name: $name, joinYear: $joinYear }) {
          employee {
            id
            departmentId
            name
            joinYear
          }
        }
      }
    MUTATION

    @department = FactoryBot.create(:department)
    @employee   = FactoryBot.create(:employee, department_id: @department.id, name: '従業員')
  end

  it 'は、更新ができること' do
    dept = FactoryBot.create(:department)
    MyappSchema.execute(@query, variables: { id: @employee.id, departmentId: dept.id, name: '従業員99', joinYear: 2000 })
    expect(@employee.reload.department_id).to eq dept.id
    expect(@employee.reload.name).to          eq '従業員99'
    expect(@employee.reload.join_year).to     eq 2000
  end
end
