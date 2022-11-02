import { createSlice } from "@reduxjs/toolkit";
import { client, getCarts } from "../api";

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

export const { setCarts, handleAddToCart } = cartReducer.actions;
export default cartReducer.reducer;
