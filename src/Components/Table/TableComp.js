import React, { useCallback, useEffect, useRef, useState } from "react";
import "./table.scss";
import { useSelector } from "react-redux";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const TableComp = () => {
  const gridRef = useRef();

  const tableData = useSelector((state) => state.EmployeeList);
  const [columnDefs, setColumnDefs] = useState([]);
  const [rowData] = useState(tableData);

  console.log(rowData);

  useEffect(() => {
    if (tableData[0]) {
      const columnNameArray = Object.keys(tableData[0]);
      setColumnDefs(
        columnNameArray.map((fieldName) => {
          return {
            field: fieldName,
            sortable: true,
          };
        })
      );
    }
  }, [tableData]);

  const onPageSizeChanged = useCallback(() => {
    var value = document.getElementById("page-size").value;
    gridRef.current.api.paginationSetPageSize(Number(value));
  }, []);

  const paginationNumberFormatter = useCallback((params) => {
    return "[" + params.value.toLocaleString() + "]";
  }, []);

  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById("filter-text-box").value
    );
  }, []);

  return (
    <div className="tableContainer">
      <div className="tableHeader">
        Page Size:
        <select onChange={onPageSizeChanged} id="page-size">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <input
          type="text"
          id="filter-text-box"
          placeholder="Filter..."
          onInput={onFilterTextBoxChanged}
        />
      </div>
      <div className="ag-theme-alpine" style={{ height: 800 }}>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={10}
          paginationNumberFormatter={paginationNumberFormatter}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default TableComp;
