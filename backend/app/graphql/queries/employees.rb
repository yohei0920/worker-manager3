module Queries
  class Employees < Queries::BaseQuery

    type [Types::EmployeeType], null: false

    def resolve
      ::Employee.all.order(:id)
    end
  end
end
