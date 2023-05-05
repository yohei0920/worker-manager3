require 'rails_helper'

RSpec.describe 'MutationType#delete_department' do
  before do
    @query = <<-MUTATION
      mutation deleteDepartment($id: ID!) {
        deleteDepartment(input: { id: $id }) {
          id
        }
      }
    MUTATION
  end

  it 'は、削除ができること' do
    department = FactoryBot.create(:department)
    expect do
      MyappSchema.execute(@query, variables: { id: department.id })
    end.to change(Department, :count).by(-1)
  end
end
