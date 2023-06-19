import { configureStore } from "@reduxjs/toolkit";
import EmployeeListReducer from "../Feature/employeeList.slice";
import EmployeeFormReducer from "../Feature/employeeForm.slice";
import ModalToggleReducer from "../Feature/modalToggle.slice";

export default configureStore({
  reducer: {
    EmployeeList: EmployeeListReducer,
    EmployeeForm: EmployeeFormReducer,
    ModalToggle: ModalToggleReducer,
  },
});
