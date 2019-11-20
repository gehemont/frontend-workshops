import { Action } from '@ngrx/store';
import { setPrefix } from './action.helpers';

export class STORE {
  static RESET_STORE = setPrefix('[STORE] Resetting store state');
  static RESET_DETAILS_STORE = setPrefix('[STORE] Resetting products details store state');
}

export class ResetStore implements Action {
  readonly type = STORE.RESET_STORE;
}

export class ResetDetailsStore implements Action {
  readonly type = STORE.RESET_DETAILS_STORE;
}

export type StoreActions = ResetStore | ResetDetailsStore;
