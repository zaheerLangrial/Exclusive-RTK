import { createSlice } from "@reduxjs/toolkit";
import { data } from "./Data";

export const ProductSlice = createSlice({
  name: "Products",
  initialState: data,
  reducers: {
    filterProduct(state, action) {
      const filterData = state.filter((pro) =>
        pro.title.toLowerCase().includes(action.payload)
      );
      console.log(filterData);
      return filterData;
    },
  },
});
export const { filterProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
