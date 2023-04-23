import { Grid } from '@material-ui/core'
import { GET_EMPLOYEES, GET_DEPTS } from '../gql/query'
import { useQuery } from '@apollo/client'
import EmployeeList from './EmployeeList'
import EmployeeCreate from './EmployeeCreate'
import EmployeeDetail from './EmployeeDetail'
import DeptList from './DeptList'
import FilterByName from "./FilterByName";

const MainPage = () => {
  const { loading: employee_loading, data: dataEmployees, error: employee_error } = useQuery(GET_EMPLOYEES)
  const { loading: dept_loading, data: dataDepts, error: dept_error } = useQuery(GET_DEPTS)
  return (
    <div>
      <h1>従業員管理システム</h1>
      {(!dept_loading && dataDepts) && <EmployeeCreate dataDepts={dataDepts} />}
      <Grid container>
        <Grid item xs={5}>
          {!employee_loading && dataEmployees && dataEmployees.employees && <EmployeeList dataEmployees={dataEmployees.employees} />}
        </Grid>
        <Grid item xs={5}><EmployeeDetail /></Grid>
      </Grid>
      <Grid container>
        <Grid item xs={5}>
          <FilterByName />
        </Grid>
        <Grid item xs={5}>
          <DeptList dataDepts={dataDepts} />
        </Grid>
      </Grid>
    </div>
  )
}

export default MainPage;
