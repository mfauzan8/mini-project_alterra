import { createSlice } from "@reduxjs/toolkit";
import { client } from "../api";

export const cartReducer = createSlice({
  name: "cartlist",
  initialState: {
    carts: [],
  },
  reducers: {
    setCarts: (state, action) => {
      state.carts = action.payload;
    },
    handleAddToCart: async (state, action) => {
      const newCart = {
        objects: {
          id_products: action.payload.id_products,
          quantity: 1,
          subtotal: action.payload.price,
          table: 4,
          total: 234599,
        },
      };
      await client.post("/", newCart);
      //state.carts = [...state.carts, newCart];
    },
  },
});

export const { setCarts, handleAddToCart } = cartReducer.actions;
export default cartReducer.reducer;
