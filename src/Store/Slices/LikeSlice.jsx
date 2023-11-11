import { createSlice } from "@reduxjs/toolkit";

export const likeSlice = createSlice({
  name: "Likes",
  initialState: [],
  reducers: {
    addLike: (state, action) => {
      const obj = action.payload;
      let likeProduct = state.find((product) => product.title === obj.title);
      if (!likeProduct) {
        state.push(obj);
      }
    },
  },
});

export const { addLike } = likeSlice.actions;

export default likeSlice.reducer;
