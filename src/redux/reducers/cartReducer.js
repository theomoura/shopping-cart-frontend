import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EDIT_PRODUCT_QUANTITY_CART,
} from '../actions/_type';
import { calcTotal } from '../../utils/cart';

const INITIAL_STATE = {
  cart: [],
  total: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (
        !state.cart.find((item) => item.product.title === action.payload.title)
      ) {
        const newProduct = { product: action.payload, quantity: 1 };
        const total = calcTotal([...state.cart, newProduct]);
        return {
          ...state,
          cart: [...state.cart, newProduct],
          total: total,
        };
      }
      return state;
    case REMOVE_FROM_CART:
      return {
        ...state,
      };
    case EDIT_PRODUCT_QUANTITY_CART:
      return {
        ...state,
      };
    default:
      return state;
  }
};
