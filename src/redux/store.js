import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./orderSlice";
import modalsReducer from "./modalDisplaySlice";
import searchOrderReducer from "./searchOrdersSlice";

export default configureStore({
  reducer: {
    orders: orderReducer,
    modals: modalsReducer,
    searchOrders: searchOrderReducer,
  },
});
