import { createSlice } from "@reduxjs/toolkit";

export const modalDisplaySlice = createSlice({
  name: "modals",
  initialState: {
    confirmDeleteModalShow: false,
    updateOrderModalShow: false,
  },
  reducers: {
    toggleUpdateOrderModal: (state) => {
      const isShown = state.updateOrderModalShow;
      state.updateOrderModalShow = !isShown;
    },
  },
});

export const { toggleUpdateOrderModal } = modalDisplaySlice.actions;

export default modalDisplaySlice.reducer;
