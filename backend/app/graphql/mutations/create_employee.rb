module Mutations
  class CreateEmployee < Mutations::BaseMutation
    graphql_name 'createEmployee'
    argument :department_id, Integer,     required: true
    argument :name,          String,      required: true
    argument :join_year,     String,      required: true

    field :employee, Types::EmployeeType, null: false

    def resolve(department_id:, name:, join_year:)
      employee = Employee.create!(department_id: department_id, name: name, join_year: join_year)

      { employee: employee }
    rescue => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
