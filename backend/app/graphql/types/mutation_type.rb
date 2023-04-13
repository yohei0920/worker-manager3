module Types
  class MutationType < Types::BaseObject
    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World"
    end

    field :create_department, mutation: Mutations::CreateDepartment
    field :update_department, mutation: Mutations::UpdateDepartment
    field :delete_department, mutation: Mutations::DeleteDepartment
    field :create_employee,   mutation: Mutations::CreateEmployee
    field :update_employee,   mutation: Mutations::UpdateEmployee
    field :delete_employee,   mutation: Mutations::DeleteEmployee
  end
end
