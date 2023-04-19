import { useContext } from 'react';
import styles from './EmployeeList.module.css'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator'
import { StateContext } from '../context/StateContext';
import { useMutation } from '@apollo/client';
import { GET_EMPLOYEES, DELETE_EMPLOYEE } from '../gql/query';

const EmployeeList = ({ dataEmployees }) => {
  const {
    setName,
    setJoinYear,
    setSelectedDept,
    setEditedId,
    dataSingleEmployee,
    getSingleEmployee,
  } = useContext(StateContext);
  const [deleteEmployee] = useMutation(DELETE_EMPLOYEE, {
    refetchQueries: [{ query: GET_EMPLOYEES }],
  });
  return (
    <>
      <h3>従業員リスト</h3>
      <ul className={styles.employeeList__list}>
        {dataEmployees.map((employee) => (
          <li className={styles.employeeList__item} key={employee.id}>
            <span>
              {employee.name} {" / "}
              {new Date(employee.joinYear).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' })}
              {" / "}
              {employee.department.name}
            </span>
            <div>
              <DeleteIcon
                className={styles.employeeList__delete}
                onClick={async () => {
                  try {
                    await deleteEmployee({
                      variables: {
                        id: employee.id,
                      },
                    });
                  } catch (err) {
                    alert(err.message);
                  }
                  if (employee.id === dataSingleEmployee?.employee.id) {
                    await getSingleEmployee({
                      variables: {
                        id: employee.id,
                      },
                    });
                  }
                }}
              />
              <EditIcon
                className={styles.employeeList__edit}
                onClick={() => {
                  setEditedId(employee.id);
                  setName(employee.name);
                  setJoinYear(employee.joinYear);
                  setSelectedDept(employee.department.id);
                }}
              />
              <DragIndicatorIcon
                className={styles.employeeList__detail}
                onClick={async () => {
                  try {
                    await getSingleEmployee({
                      variables: {
                        id: employee.id,
                      },
                    });
                  } catch (err) {
                    alert(err.message);
                  }
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default EmployeeList;
