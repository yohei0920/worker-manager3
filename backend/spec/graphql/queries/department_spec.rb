require 'rails_helper'

RSpec.describe 'QueryType#department' do
  before do
    query = <<-QUERY
      query department($id: ID!) {
        department(id: $id) {
          id
          name
        }
      }
    QUERY
    @department = FactoryBot.create(:department)
    result = MyappSchema.execute(query, variables: { id: @department.id })
    @department_result = result['data']['department']
  end

  it 'は、項目名を取得できること' do
    @department_result.each do |key, value|
      value = value.to_i if key == 'id'
      expect(value).to eq @department[key.underscore]
    end
  end
end
