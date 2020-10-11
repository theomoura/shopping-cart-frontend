import {
  STORE_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  RETRIEVE_PRODUCT,
  REQUEST_ERROR,
} from '../actions/_type';

const INITIAL_STATE = {
  products: [],
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RETRIEVE_PRODUCT:
      return { ...state, products: action.payload };
    case STORE_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((item) => action.payload !== item._id),
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        products: state.products.map((item) =>
          item._id === action.payload._id ? action.payload : item,
        ),
      };
    case REQUEST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
