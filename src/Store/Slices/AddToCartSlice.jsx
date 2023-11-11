import { createSlice } from "@reduxjs/toolkit";

export const AddCartSlice = createSlice({
  name: "Cart Slice",
  initialState: [],
  reducers: {
    addCart: (state, action) => {
      const obj = action.payload;
      const cartProduct = state.find((pro) => pro.title === obj.title);
      if (cartProduct) {
        cartProduct.quantity += 1;
      } else {
        state.push(obj);
      }
    },
    removeAll(state, action) {
      return [];
    },
    cancelProduct(state, action) {
      state = state.filter((pro) => pro.title != action.payload);
      return state;
    },
    incrementQ(state, action) {
      const product = state.find((pro) => pro.title === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decrementQ(state, action) {
      const product = state.find((pro) => pro.title === action.payload);
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        }
      }
    },
  },
});

export const { addCart, removeAll, cancelProduct, incrementQ, decrementQ } =
  AddCartSlice.actions;

export default AddCartSlice.reducer;
