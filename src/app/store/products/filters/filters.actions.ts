import { Update } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { setPrefix } from '../../action.helpers';
import { ProductFilter } from './filters.models';

// tslint:disable-next-line
export class PRODUCTS_TABLE_FILTER {
  static UPDATE_ONE = setPrefix('[PRODUCTS_TABLE_FILTER] Update One');
  static UPDATE_MANY = setPrefix('[PRODUCTS_TABLE_FILTER] Update Many');
  static ADD_ALL = setPrefix('[PRODUCTS_TABLE_FILTER] Add All');
  static UPSERT_MANY = setPrefix('[PRODUCTS_TABLE_FILTER] Upsert Many');
}

export class ProductsTableFilterUpdateOne implements Action {
  readonly type = PRODUCTS_TABLE_FILTER.UPDATE_ONE;

  constructor(
    public id: string,
    public changes: Partial<ProductFilter>,
  ) {
  }
}

export class ProductsTableFilterAddAll implements Action {
  readonly type = PRODUCTS_TABLE_FILTER.ADD_ALL;

  constructor(public filters: ProductFilter[]) {
  }
}

export class ProductsTableFilterUpdateMany implements Action {
  readonly type = PRODUCTS_TABLE_FILTER.UPDATE_MANY;

  constructor(public filters: Update<ProductFilter>[]) {
  }
}

export class ProductsTableFilterUpsertMany implements Action {
  readonly type = PRODUCTS_TABLE_FILTER.UPSERT_MANY;

  constructor(public filters: ProductFilter[]) {
  }
}

export type ProductsTableFilterActions =
  ProductsTableFilterUpdateOne
  | ProductsTableFilterAddAll
  | ProductsTableFilterUpdateMany
  | ProductsTableFilterUpsertMany;
