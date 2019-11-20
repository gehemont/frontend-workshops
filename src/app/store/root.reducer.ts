import { ActionReducerMap } from '@ngrx/store';
import { productsReducer } from './products/products.reducer';
import { ApplicationState } from './store';

export const rootReducer: ActionReducerMap<ApplicationState> = {
  products: productsReducer,
};
