import { Action } from '@ngrx/store';
import { setPrefix } from '../action.helpers';
import { ProductTableItem } from './products-table/products-table.models';

export class PRODUCTS {
  public static LOAD = setPrefix('[PRODUCTS] Load');
  public static LOAD_SUCCESS = setPrefix('[PRODUCTS] Load Success');
  public static LOAD_FAILED = setPrefix('[PRODUCTS] Load Failed');
}

export class DetailsLoad implements Action {
  readonly type: string = PRODUCTS.LOAD;
}

export class DetailsLoadSuccess implements Action {
  readonly type: string = PRODUCTS.LOAD_SUCCESS;

  constructor(public products: ProductTableItem[]) {
  }
}

export class DetailsLoadFailed implements Action {
  readonly type: string = PRODUCTS.LOAD_FAILED;
}

export type ProductsActions = DetailsLoad | DetailsLoadSuccess | DetailsLoadFailed;
