import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productReducer from './productReducer';

const reducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

export default reducer;
