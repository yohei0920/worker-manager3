module Mutations
  class UpdateDepartment < Mutations::BaseMutation
    graphql_name 'updateDepartment'
    argument :id, ID, required: true
    argument :name, String, required: true

    field :department, Types::DepartmentType, null: false

    def resolve(id:, name:)
      department = Department.find(id)
      department.update!(name: name)

      { department: department }
    rescue => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
