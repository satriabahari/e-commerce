import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  categories: ["men's clothing", "jewelery", "electronics", "women's clothing"],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;

// Selector
// export const selectedProductItems = (state) => state.product.items;
