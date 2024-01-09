import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortBy: "A-Z",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSortBy: (state, actions) => {
      state.sortBy = actions.payload;
    },
  },
});

export const { setSortBy } = filterSlice.actions;

export default filterSlice.reducer;

// Selector
export const selectedSortBy = (state) => state.filter.sortBy;
