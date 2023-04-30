import { useContext } from 'react'
import { StateContext } from "../context/StateContext";
import styles from "./DeptList.module.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { useMutation } from "@apollo/client";
import { CREATE_DEPT, DELETE_DEPT, GET_DEPTS, GET_EMPLOYEES } from "../gql/query";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

export default function DeptList({ dataDepts }) {
  const { deptName, setDeptName } = useContext(StateContext);
  const [createDept] = useMutation(CREATE_DEPT, {
    refetchQueries: [{ query: GET_DEPTS }],
  });
  const [deleteDept] = useMutation(DELETE_DEPT, {
    refetchQueries: [{ query: GET_DEPTS }, { query: GET_EMPLOYEES }],
  });
  return (
    <>
      <h3>部署名</h3>
      <TextField
        className={styles.deptList__input}
        placeholder="部署名"
        type="text"
        value={deptName}
        onChange={(e) => {
          setDeptName(e.target.value);
        }}
      />
      <div style={{ padding: '10px' }}>
        <Button variant="outlined"
          disabled={!deptName}
          onClick={async () => {
            try {
              await createDept({
                variables: {
                  name: deptName,
                },
              });
            } catch (err) {
              alert(err.message);
            }
            setDeptName("");
          }}
        >
          作成する
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>部署名</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataDepts &&
              dataDepts.departments &&
              dataDepts.departments.map((department) => (
                <TableRow key={department.id}>
                  <TableCell>{department.name}</TableCell>
                  <TableCell>
                    <DeleteIcon
                      className={styles.deptList__delete}
                      onClick={async () => {
                        try {
                          await deleteDept({
                            variables: {
                              id: department.id,
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
