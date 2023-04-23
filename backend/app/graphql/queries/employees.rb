module Queries
  class Employees < Queries::BaseQuery
    argument :name, String, required: false

    type [Types::EmployeeType], null: false

    def resolve(name: nil)
      if name.present?
        ::Employee.where(name: name)
      else
        ::Employee.all.order(:id)
      end
    end
  end
end
