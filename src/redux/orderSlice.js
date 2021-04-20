import { createSlice } from "@reduxjs/toolkit";
import ordersData from "../data/orders.json";

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
  },
});

export const { createOrder, updateOrder, deleteOrder } = orderSlice.actions;

export default orderSlice.reducer;
