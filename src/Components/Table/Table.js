import React from "react";
import { useSelector } from "react-redux";

const Table = () => {
  const tableData = useSelector((state) => state.EmployeeList);
  console.log(tableData);

  return <div></div>;
};

export default Table;
