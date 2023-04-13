# frozen_string_literal: true

module Types
  class EmployeeType < Types::BaseObject
    field :id,            ID,                             null: false
    field :department_id, Integer
    field :name,          String
    field :join_year,     GraphQL::Types::ISO8601DateTime
    field :created_at,    GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at,    GraphQL::Types::ISO8601DateTime, null: false
  end
end
