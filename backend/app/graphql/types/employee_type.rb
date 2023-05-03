# frozen_string_literal: true

module Types
  class EmployeeType < Types::BaseObject
    field :id,            ID,                             null: false
    field :department_id, ID
    field :name,          String
    field :join_year,     Integer
    field :department,    Types::DepartmentType
    field :created_at,    GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at,    GraphQL::Types::ISO8601DateTime, null: false

    delegate :department, to: :object
  end
end
