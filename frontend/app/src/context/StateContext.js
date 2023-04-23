import { createContext, useState } from 'react';
import { useLazyQuery } from "@apollo/client";
import { GET_EMPLOYEE } from '../gql/query';
export const StateContext = createContext();

const StateContextProvider = (props) => {
  const [name, setName] = useState('');
  const [joinYear, setJoinYear] = useState(2023)
  const [deptName, setDeptName] = useState('');
  const [selectedDept, setSelectedDept] = useState("");
  const [editedId, setEditedId] = useState("");
  const [
    getSingleEmployee,
    { data: dataSingleEmployee, error: errorSingleEmployee },
  ] = useLazyQuery(GET_EMPLOYEE, {
    fetchPolicy: "network-only",
  });

  return (
    <StateContext.Provider value={{
      name,
      setName,
      joinYear,
      setJoinYear,
      deptName,
      setDeptName,
      selectedDept,
      setSelectedDept,
      editedId,
      setEditedId,
      dataSingleEmployee,
      errorSingleEmployee,
      getSingleEmployee,
    }}>{props.children}</StateContext.Provider>
  )
}

export default StateContextProvider;
