import gql from "graphql-tag";

export const GET_EMPLOYEES = gql`
  query {
    employees {
      id
      departmentId
      name
      joinYear
      department {
        id
        name
      }
    }
  }
`
export const GET_DEPTS = gql`
  query {
    departments {
      id
      name
    }
  }
`

export const CREATE_EMPLOYEE = gql`
  mutation($name: String!, $joinYear: Int!, $departmentId: ID!) {
    createEmployee(input: {name: $name, joinYear: $joinYear, departmentId: $departmentId}) {
      employee {
        id
        departmentId
        name
        joinYear
        department {
          id
          name
        }
      }
    }
  }
`

export const UPDATE_EMPLOYEE = gql`
  mutation($name: String!, $joinYear: Int!, $departmentId: ID!) {
    updateEmployee(input: {name: $name, joinYear: $joinYear, departmentId: $departmentId}) {
      employee {
        id
        departmentId
        name
        joinYear
        department {
          id
          name
        }
      }
    }
  }
`
