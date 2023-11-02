import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./Slices/ProductsSlice";
import LikeSlice from "./Slices/LikeSlice";
import AddCartSlice from "./Slices/AddToCartSlice";


const store = configureStore({
    reducer : {
        product : ProductsSlice,
        like : LikeSlice, 
        cart : AddCartSlice
    }
})
export default store