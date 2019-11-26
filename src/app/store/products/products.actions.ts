import { Action } from '@ngrx/store';
import { setPrefix } from '../action.helpers';
import { ProductTableItemVM } from './products.models';

// tslint:disable-next-line
export class PRODUCTS_TABLE {
  static ADD_ONE = setPrefix('[PRODUCTS_TABLE] Add One');
  static UPDATE_ONE = setPrefix('[PRODUCTS_TABLE] Update One');
  static DELETE_ONE = setPrefix('[PRODUCTS_TABLE] Delete One');
  static DELETE_MANY = setPrefix('[PRODUCTS_TABLE] Delete Many');
  static ADD_ALL = setPrefix('[PRODUCTS_TABLE] Add All');
  static REMOVE_ALL = setPrefix('[PRODUCTS_TABLE] Remove All');
}

export class ProductsTableAddOne implements Action {
  readonly type = PRODUCTS_TABLE.ADD_ONE;

  constructor(public product: ProductTableItemVM) {
  }
}

export class ProductsTableUpdateOne implements Action {
  readonly type = PRODUCTS_TABLE.UPDATE_ONE;

  constructor(
    public id: string,
    public changes: Partial<ProductTableItemVM>,
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

  constructor(public products: ProductTableItemVM[]) {
  }
}

export class ProductsTableRemoveAll implements Action {
  readonly type = PRODUCTS_TABLE.REMOVE_ALL;
}

export type ProductsTableActions
  = ProductsTableAddOne
  | ProductsTableUpdateOne
  | ProductsTableDeleteOne
  | ProductsTableDeleteMany
  | ProductsTableRemoveAll
  | ProductsTableAddAll;
