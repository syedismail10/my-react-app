import {
    CART_ADD_ITEM,
    CART_CLEAR_ITEMS,
    CART_REMOVE_ITEM,
    CART_SAVE_PAYMENT_METHOD,
  } from "../Constants/CartConstants";
  
  export const cartReducer = (
    state = { cartItems: []},
    action
  ) => {
    switch (action.type) {
      case CART_ADD_ITEM:
        const item = action.payload;
        const existItem = state.cartItems.find((x) => x.product_id === item.product_id);
  
        if (existItem) {
          return {
            ...state,
            cartItems: state.cartItems.map((x) =>
              x.product_id === existItem.product_id ? item : x
            ),
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, item],
          };
        }
      case CART_REMOVE_ITEM:
        return {
          ...state,
          cartItems: state.cartItems.filter((x) => x.product_id !== action.payload),
        };
      case CART_SAVE_PAYMENT_METHOD:
        return {
          ...state,
          paymentMethod: action.payload,
        };
      case CART_CLEAR_ITEMS:
        localStorage.removeItem('cartItems')
        return {
          ...state,
          cartItems: [],
        };
      default:
        return state;
    }
  };
  