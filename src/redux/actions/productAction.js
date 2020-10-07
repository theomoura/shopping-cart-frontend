import { DELETE_PRODUCT, EDIT_PRODUCT, STORE_PRODUCT } from './_type';

export const insertProduct = (product) => async (dispatch) => {
  return dispatch({
    type: STORE_PRODUCT,
    payload: product,
  });
};

export const deleteProduct = (index) => async (dispatch) => {
  return dispatch({
    type: DELETE_PRODUCT,
    payload: index,
  });
};

export const editProduct = (product, index) => async (dispatch) => {
  return dispatch({
    type: EDIT_PRODUCT,
    payload: { item: product, id: index },
  });
};
