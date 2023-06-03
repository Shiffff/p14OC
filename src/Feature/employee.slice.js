import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    Employee: {},
  },
  reducers: {
    setEmployeeData: (state, { payload }) => {
      state.Employee = payload;
    },
  },
});

export const { setEmployeeData } = employeeSlice.actions;
export default employeeSlice.reducer;
