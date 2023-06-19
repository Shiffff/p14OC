import { createSlice } from "@reduxjs/toolkit";

export const employeeListSlice = createSlice({
  name: "employeeList",
  initialState: [
    {
      firstName: "Dupont",
      lastName: "dqsdsqdq",
      dateOfBirth: "06/14/2023",
      dateOfStart: "06/01/2023",
      street: "34 avenue de la Mairie",
      city: "Pompignac, Nouvelle-Aquitaine",
      State: "Alabama",
      zipCode: "33370",
      Department: "Sales",
    },
    {
      firstName: "test",
      lastName: "test",
      dateOfBirth: "06/05/2023",
      dateOfStart: "07/08/2023",
      street: "34 avenue de la Mairie",
      city: "Pompignac, Nouvelle-Aquitaine",
      State: "Alabama",
      zipCode: "33370",
      Department: "Sales",
    },
    {
      firstName: "testaa",
      lastName: "testa",
      dateOfBirth: "06/05/2023",
      dateOfStart: "07/08/2023",
      street: "34 avenue de la Mairie",
      city: "Pompignac, Nouvelle-Aquitaine",
      State: "Alabama",
      zipCode: "33370",
      Department: "Sales",
    },
    {
      firstName: "testaass",
      lastName: "testas",
      dateOfBirth: "06/05/2023",
      dateOfStart: "07/08/2023",
      street: "34 avenue de la Mairie",
      city: "Pompignac, Nouvelle-Aquitaine",
      State: "Alabama",
      zipCode: "33370",
      Department: "Sales",
    },
    {
      firstName: "testaassty",
      lastName: "testasty",
      dateOfBirth: "06/05/2023",
      dateOfStart: "07/08/2023",
      street: "34 avenue de la Mairie",
      city: "Pompignac, Nouvelle-Aquitaine",
      State: "Alabama",
      zipCode: "33370",
      Department: "Sales",
    },
    {
      firstName: "testaasstypf",
      lastName: "testastypf",
      dateOfBirth: "06/05/2023",
      dateOfStart: "07/08/2023",
      street: "34 avenue de la Mairie",
      city: "Pompignac, Nouvelle-Aquitaine",
      State: "Alabama",
      zipCode: "33370",
      Department: "Sales",
    },
  ],
  reducers: {
    setEmployeeListData: (state, { payload }) => {
      state.push(payload);
    },
  },
});

export const { setEmployeeListData } = employeeListSlice.actions;
export default employeeListSlice.reducer;
