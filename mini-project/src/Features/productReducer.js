import { createSlice } from "@reduxjs/toolkit";

export const productReducer = createSlice({
  name: "productlist",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productReducer.actions;
export default productReducer.reducer;
