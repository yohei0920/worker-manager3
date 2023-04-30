class CreateEmployees < ActiveRecord::Migration[7.0]
  def change
    create_table :employees do |t|
      t.integer  :department_id,       null: false
      t.string   :name,                null: false
      t.integer  :join_year,           null: false

      t.timestamps
    end
  end
end
