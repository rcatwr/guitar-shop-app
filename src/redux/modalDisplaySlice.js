import { createSlice } from "@reduxjs/toolkit";

export const modalDisplaySlice = createSlice({
  name: "modals",
  initialState: {
    updateOrder: {
      modalShow: false,
      order: null,
    },
    deleteOrder: {
      modalShow: false,
      order: null,
    },
  },
  reducers: {
    toggleUpdateOrderModal: (state, action) => {
      const isShown = state.updateOrder.modalShow;
      state.updateOrder.modalShow = !isShown;
      state.updateOrder.order = action.payload;
    },
    toggleDeleteOrderModal: (state, action) => {
      const isShown = state.deleteOrder.modalShow;
      state.deleteOrder.modalShow = !isShown;
      state.deleteOrder.order = action.payload;
    },
  },
});

export const {
  toggleUpdateOrderModal,
  toggleDeleteOrderModal,
} = modalDisplaySlice.actions;

export default modalDisplaySlice.reducer;
