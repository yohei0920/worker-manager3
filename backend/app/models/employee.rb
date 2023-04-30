# == Schema Information
#
# Table name: employees
#
#  id            :bigint           not null, primary key
#  name          :string(255)      not null
#  join_year     :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  department_id :integer          not null
#
class Employee < ApplicationRecord
 # バリデーション
 validates :department_id,         presence: true
 validates :name,                  presence: true
 validates :join_year,             presence: true

 # 関連
 belongs_to :department
end
