import { useContext } from "react";
import { StateContext } from "../context/StateContext";
const EmployeeDetails = () => {
  const { dataSingleEmployee, errorSingleEmployee } = useContext(StateContext);
  return (
    <>
      <h3>従業員詳細</h3>
      {errorSingleEmployee && errorSingleEmployee.message}
      {dataSingleEmployee && dataSingleEmployee.employee && (
        <>
          <h3>ID: </h3>
          {dataSingleEmployee.employee.id}
          <h3>名前: </h3>
          {dataSingleEmployee.employee.name}
          <h3>入社年度: </h3>
          {dataSingleEmployee.employee.joinYear}
          <h3>所属部署名:</h3>
          {dataSingleEmployee.employee.department.name}
        </>
      )}
    </>
  );
};

export default EmployeeDetails;
