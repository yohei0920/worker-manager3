import React from 'react'
import styles from './EmployeeList.module.css'

export default function EmployeeList({ Employees }) {
  console.log(Employees)
  return (
    <>
      <h3>Employee List</h3>
      <ul className={styles.employeeList__list}>
        {Employees.employees.map((employee) => (
          <li className={styles.employeeList__item} key={employee.id}>
            <span>
              {employee.name}
              {new Date(employee.joinYear).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' })}
              {employee.department.name}
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}
