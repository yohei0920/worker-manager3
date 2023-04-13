module Queries
  class Department < Queries::BaseQuery
    argument :id, ID, required: true

    type Types::DepartmentType, null: false

    def resolve(id:)
      ::Department.find(id)
    end
  end
end
