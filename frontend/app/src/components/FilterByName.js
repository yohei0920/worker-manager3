import { useState } from "react";
import styles from "./FilterByName.module.css";
import SearchIcon from "@material-ui/icons/Search";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_EMPLOYEES } from "../gql/query";
import TextField from '@material-ui/core/TextField';

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
      <ul className={styles.filterByName__list}>
        {errorSearch && <h3>{errorSearch.message}</h3>}
        {dataSearch &&
          dataSearch.employees &&
          dataSearch.employees.map((employee) => (
            <li className={styles.filterByName__item} key={employee.id}>
              {employee.name}
              {" / "}
              {employee.joinYear}
              {" / "}
              {employee.department.name}
            </li>
          ))}
      </ul>
    </>
  )
}

export default FilterByName;
