import { createSlice } from "@reduxjs/toolkit";

export const employeeListSlice = createSlice({
  name: "employeeList",
  initialState: [],
  reducers: {
    setEmployeeListData: (state, { payload }) => {
      state.push(payload);
    },
  },
});

export const { setEmployeeListData } = employeeListSlice.actions;
export default employeeListSlice.reducer;
