import {
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  STORE_PRODUCT,
  RETRIEVE_PRODUCT,
} from './_type';
import {
  callGetMethod,
  callPatchMethod,
  callDeleteMethod,
  callPostMethod,
} from '../../middleware/_axios';
import { endpoint, productEndpoint } from '../../utils/endpoint';

export const insertProduct = (product) => async (dispatch) => {
  callPostMethod(`${endpoint}${productEndpoint}`, product).then((resp) => {
    if (resp.status === 201) {
      return dispatch({
        type: STORE_PRODUCT,
        payload: resp.data,
      });
    }
  });
};

export const deleteProduct = (index, id) => async (dispatch) => {
  callDeleteMethod(`${endpoint}${productEndpoint}${id}`).then((resp) => {
    if (resp.status === 200) {
      return dispatch({
        type: DELETE_PRODUCT,
        payload: id,
      });
    }
  });
};

export const editProduct = (product, index) => async (dispatch) => {
  callPatchMethod(`${endpoint}${productEndpoint}${product._id}`, product).then(
    (resp) => {
      if (resp.status === 200) {
        return dispatch({
          type: EDIT_PRODUCT,
          payload: product,
        });
      }
    },
  );
};

export const retrieveProducts = () => async (dispatch) => {
  return callGetMethod(`${endpoint}${productEndpoint}`).then((resp) => {
    if (resp.status === 200) {
      return dispatch({
        type: RETRIEVE_PRODUCT,
        payload: resp.data,
      });
    }
  });
};
