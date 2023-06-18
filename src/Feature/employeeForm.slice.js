import { createSlice } from "@reduxjs/toolkit";

export const employeeFormSlice = createSlice({
  name: "employeeForm",
  initialState: {
    firstName: null,
    lastName: null,
    dateOfBirth: null,
    dateOfStart: null,
    street: null,
    city: null,
    State: "Alabama",
    zipCode: null,
    Department: "Sales",
  },
  reducers: {
    setEmployeeFormData: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
});

export const { setEmployeeFormData } = employeeFormSlice.actions;
export default employeeFormSlice.reducer;
