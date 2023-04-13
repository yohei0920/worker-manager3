module Queries
  class Departments < Queries::BaseQuery

    type [Types::DepartmentType], null: false

    def resolve
      ::Department.all.order(:id)
    end
  end
end
