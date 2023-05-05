require 'rails_helper'

RSpec.describe 'MutationType#update_department' do
  before do
    @query = <<-MUTATION
      mutation updateDepartment($id: ID!, $name: String!) {
        updateDepartment(input: { id: $id, name: $name }) {
          department {
            id
            name
          }
        }
      }
    MUTATION
  end

  it 'は、名前の更新ができること' do
    department = FactoryBot.create(:department)
    MyappSchema.execute(@query, variables: { id: department.id, name: '開発部99' })
    expect(department.reload.name).to eq '開発部99'
  end
end
