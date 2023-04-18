import React, { useContext } from 'react'
import { StateContext } from '../context/StateContext'
import styles from './EmployeeCreate.module.css'
import { useMutation } from '@apollo/client'
import { CREATE_EMPLOYEE, GET_EMPLOYEES, UPDATE_EMPLOYEE } from '../gql/query'

const EmployeeCreate = ({ dataDepts }) => {
  const {
    name,
    setName,
    joinYear,
    setJoinYear,
    selectedDept,
    setSelectedDept,
    editedId,
    setEditedId,
  } = useContext(StateContext);
  const [createEmployee] = useMutation(CREATE_EMPLOYEE, {
    refetchQueries: [{ query: GET_EMPLOYEES }],
  });
  const [updateEmployee] = useMutation(UPDATE_EMPLOYEE, {
    refetchQueries: [{ query: GET_EMPLOYEES }],
  });
  const selectOption = dataDepts.departments.map((dept) => (
    <option key={dept.id} value={dept.id}>
      {dept.name}
    </option>
  ));
  return (
    <>
      <div>
        <input
          className={styles.employeeCreate__input}
          placeholder="氏名"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className={styles.employeeCreate__input}
          placeholder="入社年"
          type="number"
          value={joinYear}
          onChange={(e) => setJoinYear(e.target.value)}
        />
      </div>
      <select
        value={selectedDept}
        onChange={(e) => {
          setSelectedDept(e.target.value);
        }}
      >
        <option value="">選択する</option>
        {selectOption}
      </select>
      <button
        disabled={!selectedDept || !name || !joinYear}
        className={styles.employeeCreate__btn}
        onClick={
          editedId
            ? async () => {
              try {
                await updateEmployee({
                  variables: {
                    id: editedId,
                    name: name,
                    joinYear: joinYear,
                    departmentId: selectedDept,
                  },
                });
              } catch (err) {
                alert(err.message);
              }
              setEditedId("");
              setName("");
              setJoinYear(2020);
              setSelectedDept("");
            }
            : async () => {
              try {
                await createEmployee({
                  variables: {
                    name: name,
                    joinYear: joinYear,
                    departmentId: selectedDept,
                  },
                });
              } catch (err) {
                alert(err.message);
              }
              setName("");
              setJoinYear(2020);
              setSelectedDept("");
            }
        }
      >
        {editedId ? "更新する" : "作成する"}
      </button>
    </>
  )
}

export default EmployeeCreate
