module Mutations
  class DeleteEmployee < Mutations::BaseMutation
    graphql_name 'deleteEmployee'
    argument :id, ID, required: true

    field :id, ID, null: false

    def resolve(id:)
      employee = Employee.find(id).delete

      { id: id }
    rescue => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
