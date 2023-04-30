1.upto(5).each do |i|
  Department.create!(
    name: "開発部#{i}"
  )
end

1.upto(20).each do |i|
  Employee.create!(
    join_year: '2020',
    department_id: rand(1..5),
    name: "従業員#{i}"
  )
end
