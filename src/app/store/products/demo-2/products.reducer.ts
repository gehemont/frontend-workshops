import { productReducerDemo2 } from './product-value.reducer';
import {
  PRODUCTS_TABLE,
  ProductsTableActions,
  ProductsTableAddAll,
  ProductsTableAddOne,
  ProductsTableDeleteOne,
  ProductsTableUpdateOne
} from '../products.actions';
import { ProductTableItemVM } from '../products.models';
import { ByIdState, ReducerMapType } from '../../reducers.helpers';
import { createSelector } from '@ngrx/store';
import { selectApplicationState } from '../../root.selectors';
import { ApplicationState } from '../../store';
import { values } from 'lodash';

/* tslint:disable:no-empty-interface */
export interface ProductsTableStateDemo2 extends ByIdState<ProductTableItemVM> {
}

export const productsInitialStateDemo2: ProductsTableStateDemo2 = {};

export const productsReducerMapDemo2: ReducerMapType<PRODUCTS_TABLE, ProductsTableStateDemo2, ProductsTableActions> = {
  [PRODUCTS_TABLE.ADD_ONE]: (state: ProductsTableStateDemo2, action: ProductsTableAddOne) => {
    return { ...state, [action.product.storeId]: action.product };
  },
  [PRODUCTS_TABLE.ADD_ALL]: (state: ProductsTableStateDemo2, action: ProductsTableAddAll) => {
    return action.products.reduce((acc, current: ProductTableItemVM) => {
      acc[current.storeId] = current;
      return acc;
    }, { ...state });
  },
  [PRODUCTS_TABLE.DELETE_ONE]: (state: ProductsTableStateDemo2, action: ProductsTableDeleteOne): ProductsTableStateDemo2 => {
    const newState = { ...state };
    delete newState[action.id];
    return newState;
  },
  // tslint:disable-next-line:max-line-length
  [PRODUCTS_TABLE.UPDATE_ONE]: (state: ProductsTableStateDemo2, action: ProductsTableUpdateOne): ProductsTableStateDemo2 => {
    const tile = state[action.id];
    return { ...state, [action.id]: productReducerDemo2(tile, action) };
  },
};

const getProductsState = createSelector(selectApplicationState,
  (state: ApplicationState): ProductsTableStateDemo2 => {
    return state.productsDemo2;
  });

export const getAllProductsDemo2 = createSelector(getProductsState,
  (state: ProductsTableStateDemo2): ProductTableItemVM[] => {
    return values(state);
  });
