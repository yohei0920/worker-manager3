import { useContext } from "react";
import { StateContext } from "../context/StateContext";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const EmployeeDetails = () => {
  const { dataSingleEmployee, errorSingleEmployee } = useContext(StateContext);
  return (
    <>
      <h3>従業員詳細</h3>
      {errorSingleEmployee && errorSingleEmployee.message}
      {dataSingleEmployee && dataSingleEmployee.employee && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>従業員名</TableCell>
                <TableCell>入社年度</TableCell>
                <TableCell>所属部署名</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <>
                  <TableCell>{dataSingleEmployee.employee.id}</TableCell>
                  <TableCell>{dataSingleEmployee.employee.name}</TableCell>
                  <TableCell>{dataSingleEmployee.employee.joinYear}</TableCell>
                  <TableCell>{dataSingleEmployee.employee.department.name}</TableCell>
                </>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default EmployeeDetails;
