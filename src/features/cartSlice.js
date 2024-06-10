import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    cartTotal: 0,
  },
  reducers: {
    addCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCart: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
    resetCart: (state) => {
      state.cart.length = 0;
    },
    setCount: (state, action) => {
      state.cartTotal = action.payload;
    },
  },
});

export const { addCart, removeCart, setCount, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
