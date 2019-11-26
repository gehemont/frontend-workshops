import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createSelector } from '@ngrx/store';
import { ReducerMapType } from '../../reducers.helpers';
import {
  PRODUCTS_TABLE,
  ProductsTableActions,
  ProductsTableAddAll,
  ProductsTableAddOne,
  ProductsTableDeleteMany,
  ProductsTableDeleteOne,
  ProductsTableRemoveAll,
  ProductsTableUpdateOne
} from '../products.actions';
import { selectApplicationState } from '../../root.selectors';
import { ApplicationState } from '../../store';
import { ProductTableItemVM } from '../products.models';

export interface ProductsTableStateDemo3 extends EntityState<ProductTableItemVM> {
  productsWithMissingPrices?: number;
}

export const getTabContextProductsKey = (productTable: ProductTableItemVM): string =>
  `#${ productTable.tabId }#${ productTable.productId }#${ productTable.tenant.id }`;

const productAdapter = createEntityAdapter<ProductTableItemVM>({
  selectId: getTabContextProductsKey
});

export const productsInitialStateDemo3: ProductsTableStateDemo3 = productAdapter.getInitialState();

export const productsReducerMapDemo3: ReducerMapType<PRODUCTS_TABLE, ProductsTableStateDemo3, ProductsTableActions> = {
  [PRODUCTS_TABLE.ADD_ONE]: (state: ProductsTableStateDemo3, action: ProductsTableAddOne): ProductsTableStateDemo3 =>
    productAdapter.addOne(action.product, state),
  [PRODUCTS_TABLE.UPDATE_ONE]: (state: ProductsTableStateDemo3, action: ProductsTableUpdateOne): ProductsTableStateDemo3 => {
    return productAdapter.updateOne({
      id: action.id,
      changes: action.changes,
    }, state);
  },
  // tslint:disable-next-line:max-line-length
  [PRODUCTS_TABLE.DELETE_ONE]: (state: ProductsTableStateDemo3, action: ProductsTableDeleteOne) => productAdapter.removeOne(action.id, state),
  // tslint:disable:max-line-length
  [PRODUCTS_TABLE.DELETE_MANY]: (state: ProductsTableStateDemo3, action: ProductsTableDeleteMany) => productAdapter.removeMany(action.ids, state),
  [PRODUCTS_TABLE.ADD_ALL]: (state: ProductsTableStateDemo3, action: ProductsTableAddAll) => productAdapter.upsertMany(action.products, state),
  [PRODUCTS_TABLE.REMOVE_ALL]: (state: ProductsTableStateDemo3, action: ProductsTableRemoveAll) => productAdapter.removeAll(state),
};

const selectAllProducts = productAdapter.getSelectors().selectAll;

export const getProductsState = createSelector(selectApplicationState,
  (state: ApplicationState): ProductsTableStateDemo3 => {
    return state.productsDemo3;
  });

export const getAllProducts = createSelector(getProductsState, selectAllProducts);

// export const getProductsWithMissingPrices = createSelector(getProductsState,
//   (state: ProductsTableStateDemo3): number => {
//     return state.productsWithMissingPrices;
//   }
// );

// export const getProductsByTabName = (tabId: string) => createSelector(
//   getAllProducts,
//   (products: ProductTableItemVM[]): ProductTableItemVM[] => {
//     return (products || []).filter((f: ProductTableItemVM) => f.tabId === tabId);
//   }
// );


// todo - array selector
// export const getCurrentTabProductsIds = createSelector(
//   getCurrentTabProducts,
//   (products: ProductTableItemVM[]): string[] => {
//     return products.map((product: ProductTableItemVM) => {
//       return getTabContextProductsKey(product);
//     });
//   }
// );
