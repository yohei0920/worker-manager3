class Department < ApplicationRecord
  # 関連
  has_many :employees

  # バリデーション
  validates :name, presence: true

  # メソッド

  # メソッド(Private)
end
