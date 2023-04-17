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
