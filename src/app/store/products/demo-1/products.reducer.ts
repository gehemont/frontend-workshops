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
import { ReducerMapType } from '../../reducers.helpers';
import { createSelector } from '@ngrx/store';
import { selectApplicationState } from '../../root.selectors';
import { ApplicationState } from '../../store';
import { findIndex } from 'lodash';

/* tslint:disable:no-empty-interface */
export type ProductsTableStateDemo1 = ProductTableItemVM[];

export const productsInitialStateDemo1: ProductsTableStateDemo1 = [];

export const productsReducerMapDemo2: ReducerMapType<PRODUCTS_TABLE, ProductTableItemVM[], ProductsTableActions> = {
  [PRODUCTS_TABLE.ADD_ONE]: (state: ProductsTableStateDemo1, action: ProductsTableAddOne) => {
    return [...state, action.product];
  },
  [PRODUCTS_TABLE.ADD_ALL]: (state: ProductsTableStateDemo1, action: ProductsTableAddAll) => {
    return [...state].concat(action.products);
  },
  [PRODUCTS_TABLE.DELETE_ONE]: (state: ProductsTableStateDemo1, action: ProductsTableDeleteOne): ProductsTableStateDemo1 => {
    const index = findIndex(state, (item: ProductTableItemVM) => item.storeId === action.id);
    const newState = { ...state };
    delete newState[action.id];
    return newState;
  },
  // tslint:disable-next-line:max-line-length
  [PRODUCTS_TABLE.UPDATE_ONE]: (state: ProductsTableStateDemo1, action: ProductsTableUpdateOne): ProductsTableStateDemo1 => {
    const tile = state[action.id];
    return { ...state, [action.id]: productReducerDemo2(tile, action) };
  },
};

export const getProductsState = createSelector(selectApplicationState,
  (state: ApplicationState): ProductsTableStateDemo1 => {
    return state.productsDemo1;
  });

export const getAllProductsDemo1 = createSelector(getProductsState,
  (state: ProductsTableStateDemo1): ProductTableItemVM[] => {
    return state;
  });
