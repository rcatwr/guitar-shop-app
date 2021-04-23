import { createSlice } from "@reduxjs/toolkit";

export const searchOrderSlice = createSlice({
  name: "searchOrders",
  initialState: {
    searchTerm: "",
    sortBy: "orderId",
    sortDir: "asc",
  },
  reducers: {
    updateSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { updateSearchTerm } = searchOrderSlice.actions;

export default searchOrderSlice.reducer;
