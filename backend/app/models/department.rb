# == Schema Information
#
# Table name: departments
#
#  id         :bigint           not null, primary key
#  name       :string(255)      not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Department < ApplicationRecord
  # 関連
  has_many  :employees, dependent: :destroy

  # バリデーション
  validates :name,      presence: true,
                        length: { maximum: 255 }

  # メソッド

  # メソッド(Private)
end
