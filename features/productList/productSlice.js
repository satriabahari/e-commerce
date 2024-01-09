import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, actions) => {
      state.items = actions.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;

// Selector
export const selectedProductItems = (state) => state.product.items;
