import { createSlice } from "@reduxjs/toolkit";

export const modalToggleSlice = createSlice({
  name: "modalToggle",
  initialState: { showModal: false },
  reducers: {
    setShowModal: (state, { payload }) => {
      state.showModal = payload;
    },
  },
});

export const { setShowModal } = modalToggleSlice.actions;
export default modalToggleSlice.reducer;
