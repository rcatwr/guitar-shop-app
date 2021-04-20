import { createSlice } from "@reduxjs/toolkit";
import ordersData from "../data/orders.json";

export const orderSlice = createSlice({
  name: "orders",
  initialState: ordersData,
  reducers: {
    createOrder: (state, action) => {
      const order = action.payload;
      state.push(order);
    },
    updateOrder: (state, action) => {
      const order = action.payload;
      const updatedOrder = state.find((item) => item.orderId === order.orderId);

      const index = state.indexOf(updatedOrder);
      console.log(index, updatedOrder);
      state[index] = order;
    },
    deleteOrder: (state, action) => {
      const orderId = action.payload;
      const deleteOrder = state.find((item) => item.orderId === orderId);
      const index = state.indexOf(deleteOrder);
      state[index].deleted = true;
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
