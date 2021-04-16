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
  },
});

export const { createOrder, updateOrder } = orderSlice.actions;

export default orderSlice.reducer;
