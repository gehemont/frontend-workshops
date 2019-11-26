import { ActionReducerMap } from '@ngrx/store';
import { ApplicationState } from './store';
import { createDefaultReducer } from './reducers.helpers';
import { PRODUCTS_TABLE, ProductsTableActions } from './products/products.actions';
import { productsInitialStateDemo3, productsReducerMapDemo3, ProductsTableStateDemo3 } from './products/demo-3/products-demo3.reducer';
import { productsInitialStateDemo2, productsReducerMapDemo2, ProductsTableStateDemo2 } from './products/demo-2/products.reducer';
import { productsInitialStateDemo1, productsReducerMapDemo1, ProductsTableStateDemo1 } from './products/demo-1/products.reducer';

export const rootReducer: ActionReducerMap<ApplicationState> = {
  // tslint:disable-next-line:max-line-length
  productsDemo1: createDefaultReducer<PRODUCTS_TABLE, ProductsTableStateDemo1, ProductsTableActions>(productsInitialStateDemo1, productsReducerMapDemo1),
  // tslint:disable-next-line:max-line-length
  productsDemo2: createDefaultReducer<PRODUCTS_TABLE, ProductsTableStateDemo2, ProductsTableActions>(productsInitialStateDemo2, productsReducerMapDemo2),
  // tslint:disable-next-line:max-line-length
  productsDemo3: createDefaultReducer<PRODUCTS_TABLE, ProductsTableStateDemo3, ProductsTableActions>(productsInitialStateDemo3, productsReducerMapDemo3)
};
