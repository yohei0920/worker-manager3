# == Schema Information
#
# Table name: employees
#
#  id            :bigint           not null, primary key
#  join_year     :datetime
#  name          :string(255)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  department_id :integer
#
class Employee < ApplicationRecord
 # バリデーション
 validates :department_id, presence: true
 validates :name,          presence: true

 # 関連
 belongs_to :department
end
