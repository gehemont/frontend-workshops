import { productReducerDemo2 } from './product-value.reducer';
import { PRODUCTS_TABLE, ProductsTableActions, ProductsTableDeleteOne, ProductsTableUpdateOne } from '../products.actions';
import { ProductTableItemVM } from '../products.models';
import { ByIdState, ReducerMapType } from '../../reducers.helpers';

/* tslint:disable:no-empty-interface */
export interface ProductsTableStateDemo2 extends ByIdState<ProductTableItemVM> {
}

export const productsInitialStateDemo2: ProductsTableStateDemo2 = {};

export const productsReducerMapDemo2: ReducerMapType<PRODUCTS_TABLE, ProductsTableStateDemo2, ProductsTableActions> = {
  // tslint:disable-next-line:max-line-length
  [PRODUCTS_TABLE.UPDATE_ONE]: (state: ProductsTableStateDemo2 = productsInitialStateDemo2, action: ProductsTableUpdateOne): ProductsTableStateDemo2 => {
    const tile = state[action.id];
    return { ...state, [action.id]: productReducerDemo2(tile, action) };
  },
  [PRODUCTS_TABLE.DELETE_ONE]: (state: ProductsTableStateDemo2, action: ProductsTableDeleteOne): ProductsTableStateDemo2 => {
    const newState = { ...state };
    delete newState[action.id];
    return newState;
  }
};
