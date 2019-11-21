import { Action } from '@ngrx/store';
import { setPrefix } from '../../action.helpers';
import { ProductTableItemDTO } from './products-table.models';
import { ProductsTableState } from './products-table.reducer';

// tslint:disable-next-line
export class PRODUCTS_TABLE {
  static ADD_ONE = setPrefix('[PRODUCTS_TABLE] Add One');
  static UPDATE_ONE = setPrefix('[PRODUCTS_TABLE] Update One');
  static UPDATE_PRODUCTS_TABLE_STATE = setPrefix('[PRODUCTS_TABLE] Update Products Table State');
  static DELETE_ONE = setPrefix('[PRODUCTS_TABLE] Delete One');
  static DELETE_MANY = setPrefix('[PRODUCTS_TABLE] Delete Many');
  static ADD_ALL = setPrefix('[PRODUCTS_TABLE] Add All');
  static REMOVE_ALL = setPrefix('[PRODUCTS_TABLE] Remove All');
}

export class ProductsTableAddOne implements Action {
  readonly type = PRODUCTS_TABLE.ADD_ONE;

  constructor(public product: ProductTableItemDTO) {
  }
}

export class ProductsTableUpdateOne implements Action {
  readonly type = PRODUCTS_TABLE.UPDATE_ONE;

  constructor(
    public id: string,
    public changes: Partial<ProductTableItemDTO>,
  ) {
  }
}

export class ProductsTableDeleteOne implements Action {
  readonly type = PRODUCTS_TABLE.DELETE_ONE;

  constructor(public id: string) {
  }
}

export class ProductsTableDeleteMany implements Action {
  readonly type = PRODUCTS_TABLE.DELETE_MANY;

  constructor(public ids: string[]) {
  }
}

export class ProductsTableAddAll implements Action {
  readonly type = PRODUCTS_TABLE.ADD_ALL;

  constructor(public products: ProductTableItemDTO[]) {
  }
}

export class ProductsTableRemoveAll implements Action {
  readonly type = PRODUCTS_TABLE.REMOVE_ALL;
}

export class UpdateProductsTableState implements Action {
  readonly type = PRODUCTS_TABLE.UPDATE_PRODUCTS_TABLE_STATE;

  constructor(public state: Partial<ProductsTableState>) {
  }
}

export type ProductsTableActions
  = ProductsTableAddOne
  | ProductsTableUpdateOne
  | ProductsTableDeleteOne
  | ProductsTableDeleteMany
  | ProductsTableRemoveAll
  | ProductsTableAddAll
  | UpdateProductsTableState;
