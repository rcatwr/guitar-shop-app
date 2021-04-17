import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./orderSlice";
import modalsReducer from "./modalDisplaySlice";

export default configureStore({
  reducer: {
    orders: orderReducer,
    modals: modalsReducer,
  },
});
