import { Action } from '@ngrx/store';
import { setPrefix } from '../action.helpers';

export class PRODUCTS {
  public static LOAD = setPrefix('[PRODUCTS] Load');
  public static LOAD_FAILED = setPrefix('[PRODUCTS] Load Failed');
}

export class DetailsLoad implements Action {
  readonly type: string = PRODUCTS.LOAD;
}

export class DetailsLoadFailed implements Action {
  readonly type: string = PRODUCTS.LOAD_FAILED;
}

export type ProductsActions = DetailsLoad | DetailsLoadFailed;
