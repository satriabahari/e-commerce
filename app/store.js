import cartSlice from "@/features/cart/cartSlice";
import filterSlice from "@/features/productList/filterSlice";
import productSlice from "@/features/productList/productSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    cart: cartSlice,
    filter: filterSlice,
    product: productSlice,
  },
});
