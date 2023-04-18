import styles from './EmployeeList.module.css'

const EmployeeList = ({ dataEmployees }) => {
  return (
    <>
      <h3>Employee List</h3>
      <ul className={styles.employeeList__list}>
        {dataEmployees.map((employee) => (
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

export default EmployeeList;
