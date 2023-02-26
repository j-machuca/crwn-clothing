import { AnyAction } from "redux";
import { setCartItems, SetCartItems, setIsCartOpen } from "./cart.actions";

import { CartItem, CART_ACTION_TYPES } from "./cart.types";

export type CartState = {
  isCartOpen: boolean;
  cartItems: CartItem[];
};

export const INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  return state;
};
