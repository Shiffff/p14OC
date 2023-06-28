import { createSlice } from "@reduxjs/toolkit";

export const employeeFormSlice = createSlice({
  name: "employeeForm",
  initialState: {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    dateOfStart: "",
    street: "",
    city: "",
    State: "Alabama",
    abbreviation: "AL",
    zipCode: "",
    Department: "Sales",
  },
  reducers: {
    setEmployeeFormData: (state, { payload }) => {
      return { ...state, ...payload };
    },
    setResetEmployeeForm: () => {
      return employeeFormSlice.reducer(undefined, {});
    },
  },
});

export const { setEmployeeFormData, setResetEmployeeForm } =
  employeeFormSlice.actions;
export default employeeFormSlice.reducer;
