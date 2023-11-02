// SubTotalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const subTotalSlice = createSlice({
  name: "subTotal",
  initialState: 0, // Initialize with 0 as the initial subtotal
  reducers: {
    updateSubtotal: (state, action) => {
      // Calculate the subtotal based on the product and quantity
      const { product, quantity } = action.payload;
      state = product.newPrice * quantity; // Update the subtotal
      return state;
    },
  },
});

export const { updateSubtotal } = subTotalSlice.actions;

export default subTotalSlice.reducer;
