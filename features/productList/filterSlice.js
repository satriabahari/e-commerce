import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortBy: "",
  category: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setSortBy, setCategory } = filterSlice.actions;

export default filterSlice.reducer;

// Selector
// export const selectedSortBy = (state) => state.filter.sortBy;
// export const selectedCategory = (state) => state.filter.category;
