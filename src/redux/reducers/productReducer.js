import { STORE_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT } from '../actions/_type';

const INITIAL_STATE = {
  products: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((_, index) => action.payload !== index),
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        products: state.products.map((item, index) =>
          index === action.payload.id ? action.payload.item : item,
        ),
      };
    default:
      return state;
  }
};
