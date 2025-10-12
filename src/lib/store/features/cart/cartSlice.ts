import { Product, Topping } from "@/lib/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  product: Product;
  chosenConfiguration: {
    priceConfiguration: {
      [key: string]: string;
    };
    selectedToppings: Topping[];
  };
}

export interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = {
        product: action.payload.product,
        chosenConfiguration: action.payload.chosenConfiguration,
      };
      window.localStorage.setItem(
        "cartItems",
        JSON.stringify([...state.cartItems, newItem])
      );
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return {
        cartItems: [...state.cartItems, newItem],
      };
    },
    setInitialCart: (state, action: PayloadAction<CartItem[]>) => {
      state.cartItems.push(...action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, setInitialCart } = cartSlice.actions;

export default cartSlice.reducer;
