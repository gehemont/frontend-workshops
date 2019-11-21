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
import { ProductTableItem } from './products-table.models';

export interface ProductsTableState extends EntityState<ProductTableItem> {
  productsWithMissingPrices?: number;
}

export const getTabContextProductsKey = (productTable: ProductTableItem): string =>
  `#${ productTable.tabId }#${ productTable.productId }#${ productTable.tenant.id }`;

const productAdapter = createEntityAdapter<ProductTableItem>({
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
  (products: ProductTableItem[], currentTabId: string): ProductTableItem[] => {
    return (products || []).filter((f: ProductTableItem) => f.tabId === currentTabId);
  }
);

export const getProductsByTabName = (tabId: string) => createSelector(
  getAllProducts,
  (products: ProductTableItem[]): ProductTableItem[] => {
    return (products || []).filter((f: ProductTableItem) => f.tabId === tabId);
  }
);

export const getCurrentTabProductsIds = createSelector(
  getCurrentTabProducts,
  (products: ProductTableItem[]): string[] => {
    return products.map((product: ProductTableItem) => {
      return getTabContextProductsKey(product);
    });
  }
);
