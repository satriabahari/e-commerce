import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const selectedCartIndex = state.items.findIndex(
        (item) => item.id === newItem.id
      );

      if (selectedCartIndex !== -1) {
        state.items[selectedCartIndex].quantity += 1;
        state.items[selectedCartIndex].totalPrice =
          state.items[selectedCartIndex].price *
          state.items[selectedCartIndex].quantity;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          price: newItem.price,
        });
      }
    },
    minItemToCart: (state, action) => {
      const currentItem = action.payload;
      const selectedCartIndex = state.items.findIndex(
        (item) => item.id === currentItem.id
      );

      if (selectedCartIndex !== -1) {
        if (state.items[selectedCartIndex].quantity > 1) {
          state.items[selectedCartIndex].quantity -= 1;
          state.items[selectedCartIndex].totalPrice =
            state.items[selectedCartIndex].price *
            state.items[selectedCartIndex].quantity;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== currentItem.id
          );
        }
      }
    },
    removeItemFromCart: (state, action) => {
      const currentItem = action.payload;
      state.items = state.items.filter((item) => item.id !== currentItem.id);
    },
  },
});

export const { addItemToCart, minItemToCart, removeItemFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;

// Selector
export const selectedCartItems = (state) => state.cart.items;
export const selectedTotalItems = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectedTotalPrice = (state) =>
  state.cart.items.reduce((total, item) => total + item.totalPrice, 0);
