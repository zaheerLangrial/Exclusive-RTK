import { createSlice } from "@reduxjs/toolkit";

export const likeSlice = createSlice({
  name: 'Likes',
  initialState: [],
  reducers: {
    addLike: (state, action) => {
      state.push(action.payload)
      console.log(state.length)
    }
  }
});

export const { addLike } = likeSlice.actions;

export default likeSlice.reducer;
