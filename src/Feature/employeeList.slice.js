import { createSlice } from "@reduxjs/toolkit";

export const employeeListSlice = createSlice({
  name: "employeeList",
  initialState: [],
  reducers: {
    setEmployeeListData: (state, { payload }) => {
      state.EmployeeList = payload;
    },
  },
});

export const { setEmployeeListData } = employeeListSlice.actions;
export default employeeListSlice.reducer;
