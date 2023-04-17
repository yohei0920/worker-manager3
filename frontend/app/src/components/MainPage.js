import React from 'react'
import { Grid } from '@material-ui/core'
import EmployeeList from './EmployeeList'
import { GET_EMPLOYEES } from '../gql/query'
import { useQuery } from '@apollo/client'

export default function MainPage() {
  const { loading, data, error } = useQuery(GET_EMPLOYEES)
  console.log(loading)
  console.log(error)
  return (
    <div>
      <Grid container>
        <Grid item xs={5}>
          {data && data.employees && <EmployeeList Employees={data} />}
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  )
}
