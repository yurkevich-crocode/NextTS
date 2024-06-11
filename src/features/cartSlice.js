import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    cartTotal: 0,
    notification: false,
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
      state.notification = true;
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
    resetNotification: (state) => {
      state.notification = false;
    },
  },
});

export const { addCart, removeCart, setCount, resetCart, resetNotification } =
  cartSlice.actions;

export default cartSlice.reducer;
