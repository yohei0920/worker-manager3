import { useContext } from 'react';
import styles from './EmployeeList.css'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator'
import { StateContext } from '../context/StateContext';
import { useMutation } from '@apollo/client';
import { GET_EMPLOYEES, DELETE_EMPLOYEE } from '../gql/query';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

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
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>従業員名</TableCell>
              <TableCell>入社年度</TableCell>
              <TableCell>部署名</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataEmployees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.joinYear}年度</TableCell>
                <TableCell>{employee.department.name}</TableCell>
                <TableCell>
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default EmployeeList;
