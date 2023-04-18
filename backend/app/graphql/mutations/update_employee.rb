module Mutations
  class UpdateEmployee < Mutations::BaseMutation
    graphql_name 'updateEmployee'
    argument :id,            ID,          required: true
    argument :department_id, ID,          required: true
    argument :name,          String,      required: true
    argument :join_year,     Integer,     required: true

    field :employee, Types::EmployeeType, null: false

    def resolve(id:, department_id:, name:, join_year:)
      employee = Employee.find(id)
      employee.update!(department_id: department_id, name: name, join_year: join_year)

      { employee: employee }
    rescue => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
