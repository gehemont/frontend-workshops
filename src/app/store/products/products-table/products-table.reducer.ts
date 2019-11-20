import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createSelector } from '@ngrx/store';
import { ReducerMapType } from '../../reducers.helpers';
import { ProductsState } from '../products.models';
import { getProductsState } from '../products.selectors';
import { getCurrentTabId } from '../tabs/tabs.reducer';
import {
  PRODUCTS_TABLE,
  ProductsTableActions,
  ProductsTableAddAll,
  ProductsTableAddOne,
  ProductsTableDeleteMany,
  ProductsTableDeleteOne,
  ProductsTableRemoveAll,
  ProductsTableUpdateOne,
  UpdateProductsTableState
} from './products-table.actions';
import { ProductTable } from './products-table.models';

export interface ProductsTableState extends EntityState<ProductTable> {
  productsWithMissingPrices?: number;
}

export const getTabContextProductsKey = (productTable: ProductTable) =>
  `#${ productTable.tabId }#${ productTable.productId }#${ productTable.tenant.id }`;

const productAdapter = createEntityAdapter<ProductTable>({
  selectId: getTabContextProductsKey
});

export const productsInitialState: ProductsTableState = productAdapter.getInitialState();

export const productsReducerMap: ReducerMapType<PRODUCTS_TABLE, ProductsTableState, ProductsTableActions> = {
  [PRODUCTS_TABLE.ADD_ONE]: (state: ProductsTableState, action: ProductsTableAddOne): ProductsTableState =>
    productAdapter.addOne(action.product, state),
  [PRODUCTS_TABLE.UPDATE_ONE]: (state: ProductsTableState, action: ProductsTableUpdateOne): ProductsTableState => {
    return productAdapter.updateOne({
      id: action.id,
      changes: action.changes,
    }, state);
  },
  [PRODUCTS_TABLE.DELETE_ONE]: (state: ProductsTableState, action: ProductsTableDeleteOne) => productAdapter.removeOne(action.id, state),
  // tslint:disable:max-line-length
  [PRODUCTS_TABLE.DELETE_MANY]: (state: ProductsTableState, action: ProductsTableDeleteMany) => productAdapter.removeMany(action.ids, state),
  [PRODUCTS_TABLE.ADD_ALL]: (state: ProductsTableState, action: ProductsTableAddAll) => productAdapter.upsertMany(action.products, state),
  [PRODUCTS_TABLE.REMOVE_ALL]: (state: ProductsTableState, action: ProductsTableRemoveAll) => productAdapter.removeAll(state),
  [PRODUCTS_TABLE.UPDATE_PRODUCTS_TABLE_STATE]: (state: ProductsTableState, action: UpdateProductsTableState) =>
    ({ ...state, ...action.state })
};

const selectAllProducts = productAdapter.getSelectors().selectAll;

export const getProductsTableState = createSelector(getProductsState,
  (state: ProductsState): ProductsTableState => {
    return state.products_table;
  });

export const getAllProducts = createSelector(getProductsTableState, selectAllProducts);

export const getProductsWithMissingPrices = createSelector(getProductsTableState,
  (state: ProductsTableState): number => {
    return state.productsWithMissingPrices;
  }
);

export const getCurrentTabProducts = createSelector(
  getAllProducts,
  getCurrentTabId,
  (products: ProductTable[], currentTabId: string): ProductTable[] => {
    return (products || []).filter((f: ProductTable) => f.tabId === currentTabId);
  }
);

export const getProductsByTabName = (tabId: string) => createSelector(
  getAllProducts,
  (products: ProductTable[]): ProductTable[] => {
    return (products || []).filter((f: ProductTable) => f.tabId === tabId);
  }
);

export const getCurrentTabProductsIds = createSelector(
  getCurrentTabProducts,
  (products: ProductTable[]): string[] => {
    return products.map((product: ProductTable) => {
      return getTabContextProductsKey(product);
    });
  }
);
