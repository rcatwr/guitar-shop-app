import { createSlice } from "@reduxjs/toolkit";
import ordersData from "../data/orders.json";

// make a simple function to replace the repetition here!

export const orderSlice = createSlice({
  name: "orders",
  initialState: ordersData,
  reducers: {
    createOrder: (state, action) => {
      const order = action.payload.order;
      state.push(order);
    },
    updateOrder: (state, action) => {
      const order = action.payload.order;
      const updatedOrder = state.find((item) => item.orderId === order.orderId);
      const index = state.indexOf(updatedOrder);
      state[index] = order;
    },
    deleteOrder: (state, action) => {
      const orderId = action.payload;
      const deletedOrder = state.find((item) => item.orderId === orderId);
      const index = state.indexOf(deletedOrder);
      state.splice(index, 1);
    },
    archiveOrder: (state, action) => {
      const orderId = action.payload;
      const archiveOrder = state.find((item) => item.orderId === orderId);
      const index = state.indexOf(archiveOrder);
      state[index].archived = true;
    },
    completeOrder: (state, action) => {
      const orderId = action.payload;
      const completeOrder = state.find((item) => item.orderId === orderId);
      const index = state.indexOf(completeOrder);
      state[index].completed = true;
    },
  },
});

export const {
  createOrder,
  updateOrder,
  deleteOrder,
  archiveOrder,
  completeOrder,
} = orderSlice.actions;

export default orderSlice.reducer;
