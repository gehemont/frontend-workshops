import { createSelector } from '@ngrx/store';
import { getReportDesignerFeatureSelector } from '../root.selectors';
import { ApplicationState } from '../store';
import { ProductsState } from './products.models';

export const getProductsState = createSelector(getReportDesignerFeatureSelector,
  (state: ApplicationState): ProductsState => {
    return state.products;
  });
