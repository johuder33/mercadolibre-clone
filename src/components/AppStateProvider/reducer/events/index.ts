import { addProductHandler, ADD_PRODUCT } from './addProducts';
import { searchProductReducer, SEARCH_PRODUCT } from './addSearch';
import { loadingReducer, IS_LOADING } from './loading';
const DEFAULT = 'DEFAULT';

export const Events: { [key: string]: any } = {
  [ADD_PRODUCT]: addProductHandler,
  [SEARCH_PRODUCT]: searchProductReducer,
  [IS_LOADING]: loadingReducer,
  [DEFAULT]: (state: any) => state
};

export {
  ADD_PRODUCT,
  DEFAULT,
  IS_LOADING
};
