module Mutations
  class DeleteDepartment < Mutations::BaseMutation
    graphql_name 'deleteDepartment'
    argument :id, ID, required: true

    field :id, ID, null: false

    def resolve(id:)
      department = Department.find(id).delete

      { id: id }
    rescue => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
