import { createSlice } from "@reduxjs/toolkit";

export const cartReducer = createSlice({
  name: "cartlist",
  initialState: {
    carts: [],
  },
  reducers: {
    setCarts: (state, action) => {
      state.carts = action.payload;
    },
  }
})

export const { setCarts } = cartReducer.actions;
export default cartReducer.reducer;
