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
  },
});

export const { addItemToCart } = cartSlice.actions;

export default cartSlice;

// Selector
// export const selectedCartItems = (state) => state.cart.items;
// export const selectedCartTotalItems = (state) =>
//   state.cart.items.reduce((total, item) => total + item.quantity, 0);
// export const selectedCartTotalPrice = (state) =>
//   state.cart.items.reduce((total, item) => total + item.price, 0);
