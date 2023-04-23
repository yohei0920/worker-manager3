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

export const SEARCH_EMPLOYEES = gql`
  query($name: String!) {
    employees(name: $name) {
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

export const GET_EMPLOYEE = gql`
  query($id: ID!) {
    employee(id: $id) {
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
  mutation($id: ID!, $name: String!, $joinYear: Int!, $departmentId: ID!) {
    updateEmployee(input: {id: $id, name: $name, joinYear: $joinYear, departmentId: $departmentId}) {
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

export const DELETE_EMPLOYEE = gql`
  mutation($id: ID!) {
    deleteEmployee(input: {id: $id}) {
      id
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

export const CREATE_DEPT = gql`
  mutation($name: String!) {
    createDepartment(input: {name: $name}) {
      department {
        id
        name
      }
    }
  }
`

export const DELETE_DEPT = gql`
  mutation($id: ID!) {
    deleteDepartment(input: {id: $id}) {
      id
    }
  }
`
