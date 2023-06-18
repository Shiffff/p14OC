import { configureStore } from "@reduxjs/toolkit";
import EmployeeListReducer from "../Feature/employeeList.slice";
import EmployeeFormReducer from "../Feature/employeeForm.slice";

export default configureStore({
  reducer: {
    EmployeeList: EmployeeListReducer,
    EmployeeForm: EmployeeFormReducer,
  },
});
