import { Action } from '@ngrx/store';

export interface ByIdState<T> {
  [key: string]: T;
}

export interface ActionWithPayload<T> extends Action {
  readonly type: string;
  payload: T;
}

export interface TileConfig {
  id: string;
  viewType: string;
}

/* tslint:disable:no-empty-interface */
export interface TileState extends ByIdState<TileConfig> {
}
