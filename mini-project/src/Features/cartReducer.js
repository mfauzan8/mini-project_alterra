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
    // handleAddToCart: (state, action) => {
    //   // console.log(action.payload)
    //   // if()
    //   const newProduct = {
    //     id_products: action.payload.id_products,
    //     quantity: 1,
    //     subtotal: action.payload.price,
    //     table: 4,
    //     tax: action.payload.price * 0.1,
    //     total: action.payload.price * 0.1 + action.payload.price,
    //   };
    //   client.post("/", newProduct)
    //     .then((res) => state.carts.push(res.data.insert_nafa_resto_cart.returning))

    // }
  }
})

export const { setCarts, handleAddToCart } = cartReducer.actions;
export default cartReducer.reducer;
