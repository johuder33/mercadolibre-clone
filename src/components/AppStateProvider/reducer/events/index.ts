import { addProductHandler, ADD_PRODUCT } from './addProducts';
import { searchProductReducer, SEARCH_PRODUCT } from './addSearch';
const DEFAULT = 'DEFAULT';

export const Events: { [key: string]: any } = {
  [ADD_PRODUCT]: addProductHandler,
  [SEARCH_PRODUCT]: searchProductReducer,
  [DEFAULT]: (state: any) => state
};


export {
  ADD_PRODUCT,
  DEFAULT
};
