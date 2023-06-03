import { configureStore } from "@reduxjs/toolkit";
import EmployeeReducer from "../Feature/employee.slice";

export default configureStore({
  reducer: {
    Employee: EmployeeReducer,
  },
});
