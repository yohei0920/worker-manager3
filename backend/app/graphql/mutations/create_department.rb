module Mutations
  class CreateDepartment < Mutations::BaseMutation
    graphql_name 'createDepartment'
    argument :name, String, required: true

    field :department, Types::DepartmentType, null: false

    def resolve(name:)
      department = Department.create!(name: name)
      { department: department }
    rescue => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
