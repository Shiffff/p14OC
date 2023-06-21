import React from "react";
import "./employeeList.scss";
import TableComp from "../../Components/Table/TableComp";

const EmployeeList = () => {
  return (
    <div>
      <h2>Current Employees</h2>
      <TableComp />
    </div>
  );
};

export default EmployeeList;
