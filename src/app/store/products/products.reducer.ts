import { combineReducers } from '@ngrx/store';
import { createDefaultReducer } from '../reducers.helpers';
import { PRODUCTS_TABLE_FILTER, ProductsTableFilterActions } from './filters/filters.actions';
import { filtersInitialState, filtersReducerMap, ProductsTableFilterState } from './filters/filters.reducer';
import { PRODUCTS_TABLE, ProductsTableActions } from './products-table/products-table.actions';
import { productsInitialState, productsReducerMap, ProductsTableState } from './products-table/products-table.reducer';
import { TABS, TabsActions } from './tabs/tabs.actions';
import { tabsInitialState, tabsReducerMap, TabsState } from './tabs/tabs.reducer';

const combinedReducer = combineReducers({
    // tslint:disable:max-line-length
    products_table: createDefaultReducer<PRODUCTS_TABLE, ProductsTableState, ProductsTableActions>(productsInitialState, productsReducerMap),
    // tslint:disable:max-line-length
    filters: createDefaultReducer<PRODUCTS_TABLE_FILTER, ProductsTableFilterState, ProductsTableFilterActions>(filtersInitialState, filtersReducerMap),
    tabs: createDefaultReducer<TABS, TabsState, TabsActions>(tabsInitialState, tabsReducerMap)
  }
);

export function productsReducer(a: any, s: any): any {
  return combinedReducer(a, s);
}
