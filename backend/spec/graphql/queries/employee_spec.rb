require 'rails_helper'

RSpec.describe 'QueryType#employee' do
  before do
    query = <<-QUERY
      query employee($id: ID!) {
        employee(id: $id) {
          id
          departmentId
          name
          joinYear
        }
      }
    QUERY
    department = FactoryBot.create(:department)
    @employee = FactoryBot.create(:employee, department_id: department.id)
    result = MyappSchema.execute(query, variables: { id: @employee.id })
    @employee_result = result['data']['employee']
  end

  it 'は、項目名を取得できること' do
    @employee_result.each do |key, value|
      value = value.to_i if key == 'id' || key == 'departmentId'
      expect(value).to eq @employee[key.underscore]
    end
  end
end
