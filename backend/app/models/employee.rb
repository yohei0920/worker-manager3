class Employee < ApplicationRecord
 # バリデーション
 validates :department_id, presence: true
 validates :name,          presence: true

 # 関連
 belongs_to :department
end
