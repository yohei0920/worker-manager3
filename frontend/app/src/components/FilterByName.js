import { useState } from "react";
import styles from "./FilterByName.css";
import SearchIcon from "@material-ui/icons/Search";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_EMPLOYEES } from "../gql/query";
import TextField from '@material-ui/core/TextField';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const FilterByName = () => {
  const [searchByName, setSearchByName] = useState("");
  const [
    searchEmployee,
    { data: dataSearch, error: errorSearch },
  ] = useLazyQuery(SEARCH_EMPLOYEES, {
    fetchPolicy: "network-only",
  });
  return (
    <>
      <h3>従業員名で検索</h3>
      <TextField
        placeholder="従業員名を入力してください"
        type="text"
        value={searchByName}
        onChange={(e) => {
          setSearchByName(e.target.value);
        }}
      />
      <div>
        <SearchIcon
          className={styles.filterByName__search}
          onClick={async () => {
            await searchEmployee({
              variables: {
                name: searchByName,
              },
            });
            setSearchByName("");
          }}
        />
      </div>
      {errorSearch && <h3>{errorSearch.message}</h3>}
      {dataSearch &&
        dataSearch.employees &&
        dataSearch.employees.map((employee) => (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>従業員名</TableCell>
                  <TableCell>入社年度</TableCell>
                  <TableCell>所属部署名</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={employee.id}>
                  <>
                    <TableCell>{employee.name}</TableCell>
                    <TableCell>{employee.joinYear}</TableCell>
                    <TableCell>{employee.department.name}</TableCell>
                  </>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ))}
    </>
  )
}

export default FilterByName;
