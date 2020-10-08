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
        const newTotal = calcTotal([...state.cart, newProduct]);
        return {
          ...state,
          cart: [...state.cart, newProduct],
          total: newTotal,
        };
      }
      return state;
    case REMOVE_FROM_CART:
      const updatedList = state.cart.filter(
        (_, index) => action.payload !== index,
      );
      const newTotal = calcTotal(updatedList);

      return {
        ...state,
        cart: updatedList,
        total: newTotal,
      };
    case EDIT_PRODUCT_QUANTITY_CART:
      const { increment, id } = action.payload;
      const newList = state.cart.map((item, index) =>
        index === id
          ? {
              ...item,
              quantity: increment ? item.quantity + 1 : item.quantity - 1,
            }
          : item,
      );
      const updatedTotal = calcTotal(newList);

      return {
        ...state,
        cart: newList,
        total: updatedTotal,
      };
    default:
      return state;
  }
};
