import {
  ADD_TO_CART,
  EDIT_PRODUCT_QUANTITY_CART,
  REMOVE_FROM_CART,
} from './_type';

export const insertToCart = (product) => async (dispatch) => {
  return dispatch({
    type: ADD_TO_CART,
    payload: product,
  });
};

export const deleteFromCart = (index) => async (dispatch) => {
  return dispatch({
    type: REMOVE_FROM_CART,
    payload: index,
  });
};

export const editCartQuantity = (index, increment) => async (dispatch) => {
  return dispatch({
    type: EDIT_PRODUCT_QUANTITY_CART,
    payload: { id: index, increment: increment },
  });
};
