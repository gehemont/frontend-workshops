import { createSelector } from '@ngrx/store';
import { selectApplicationState } from '../root.selectors';
import { ProductsState } from './products.models';
import { ApplicationState } from '../store';

export const getProductsState = createSelector(selectApplicationState,
  (state: ApplicationState): ProductsState => {
    return state.products;
  });

