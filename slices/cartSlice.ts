import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const initialState: any = {
  cartItem: [],
  hidden: true,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItem = [];
      state.total = 0;
    },
    addToCart: (state, action) => {
      const itemInCart = state.cartItem.find(
        (item: any) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.amount++;
        state.total += itemInCart.price;
      } else {
        state.cartItem.push({ ...action.payload, amount: 1 });
        state.total += action.payload.price;
      }
    },
    removeItem: (state, action) => {
      const price = action.payload.price * action.payload.amount;
      state.cartItem = state.cartItem.filter(
        (el: any) => el.id !== action.payload.id
        );
        state.total -= price;
    },
    increase: (state, { payload }) => {
      const price = payload.price;
      state.cartItem.map((item: any) => {
        item.id === payload.id ? { ...item, amount: item.amount++ } : item;
      });
      state.total += price;
    },
    decrease: (state, { payload }) => {
      const price= payload.price;
      state.cartItem.map((item: any) => {
        item.id === payload.id ? { ...item, amount: item.amount-- } : item;
        if (item.amount === 0) {
          state.cartItem = state.cartItem.filter(
            (el: any) => el.id !== item.id
          );
        }
      });
      state.total -= price;
    },
  },
});

export const {
  addToCart,
  removeItem,
  clearCart,
  increase,
  decrease,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.cartItem;

export default cartSlice.reducer;
