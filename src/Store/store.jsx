import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./Slices/ProductsSlice";
import LikeSlice from "./Slices/LikeSlice";
import AddCartSlice from "./Slices/AddToCartSlice";
import SubTotalSlice from "./Slices/SubTotalSlice";

const store = configureStore({
  reducer: {
    product: ProductsSlice,
    like: LikeSlice,
    cart: AddCartSlice,
    subtotal: SubTotalSlice,
  },
});
export default store;
