import { createSlice } from "@reduxjs/toolkit";

export const AddCartSlice = createSlice({
  name: 'Cart Slice',
  initialState: [],
  reducers: {
    addCart: (state, action) => {
      state.push(action.payload)
      console.log(state)
      console.log(action.payload)
    },
    removeAll (state , action) {
        return []
    }
  }
});

export const { addCart , removeAll  } = AddCartSlice.actions;

export default AddCartSlice.reducer;