module Queries
  class Employee < Queries::BaseQuery
    argument :id, ID, required: true

    type Types::EmployeeType, null: false

    def resolve(id:)
      ::Employee.includes(:department).order(:id)
    end
  end
end
