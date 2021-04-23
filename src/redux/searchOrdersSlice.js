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
    sortCategory: (state, action) => {
      state.sortBy = action.payload;
    },
    sortDirection: (state, action) => {
      state.sortDir = action.payload;
    },
  },
});

export const {
  updateSearchTerm,
  sortCategory,
  sortDirection,
} = searchOrderSlice.actions;

export default searchOrderSlice.reducer;

// finish adding more reducers here!
