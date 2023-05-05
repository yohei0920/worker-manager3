require 'rails_helper'

RSpec.describe 'MutationType#create_department' do
  before do
    @query = <<-MUTATION
      mutation createDepartment($name: String!) {
        createDepartment(input: { name: $name }) {
          department {
            id
            name
          }
        }
      }
    MUTATION
  end

  it 'は、新規作成ができること' do
    expect do
      MyappSchema.execute(@query, variables: { name: '開発部' })
    end.to change(Department, :count)
  end
end
