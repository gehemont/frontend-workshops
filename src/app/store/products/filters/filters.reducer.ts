import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createSelector } from '@ngrx/store';
import { getEntityById, ReducerMapType } from '../../reducers.helpers';
import { ProductsState } from '../products.models';
import { getProductsState } from '../products.selectors';
import { getCurrentTabId } from '../tabs/tabs.reducer';
import {
  PRODUCTS_TABLE_FILTER,
  ProductsTableFilterActions,
  ProductsTableFilterAddAll,
  ProductsTableFilterUpdateMany,
  ProductsTableFilterUpdateOne,
  ProductsTableFilterUpsertMany
} from './filters.actions';
import { ProductFilter } from './filters.models';

export interface ProductsTableFilterState extends EntityState<ProductFilter> {
}

export const getTabContextFilterKey = (tabId, filterId) => `#${ tabId }#${ filterId }`;

const filterAdapter = createEntityAdapter<ProductFilter>({
  selectId: (filter: ProductFilter) => getTabContextFilterKey(filter.tabId, filter.filterId)
});

export const filtersInitialState: ProductsTableFilterState = filterAdapter.getInitialState();

export const filtersReducerMap: ReducerMapType<PRODUCTS_TABLE_FILTER, ProductsTableFilterState, ProductsTableFilterActions> = {
  [PRODUCTS_TABLE_FILTER.UPDATE_ONE]: (state: ProductsTableFilterState, action: ProductsTableFilterUpdateOne): ProductsTableFilterState =>
    filterAdapter.updateOne({
      id: action.id,
      changes: action.changes,
    }, state),
  [PRODUCTS_TABLE_FILTER.ADD_ALL]: (state: ProductsTableFilterState, action: ProductsTableFilterAddAll) => {
    return filterAdapter.addAll(action.filters, state);
  },
  [PRODUCTS_TABLE_FILTER.UPSERT_MANY]: (state: ProductsTableFilterState, action: ProductsTableFilterUpsertMany) => {
    return filterAdapter.upsertMany(action.filters, state);
  },
  [PRODUCTS_TABLE_FILTER.UPDATE_MANY]: (state: ProductsTableFilterState, action: ProductsTableFilterUpdateMany) => {
    return filterAdapter.updateMany(action.filters, state);
  }
};

const {
  selectAll: selectAllFilters,
  selectEntities: selectFiltersEntities,
  selectIds: selectFilterIds
} = filterAdapter.getSelectors();

export const getFiltersStateDetails = createSelector(getProductsState,
  (state: ProductsState): ProductsTableFilterState => {
    return state.filters;
  });

const getAllFilters = createSelector(getFiltersStateDetails, selectAllFilters);

export const getTabFilters = createSelector(
  getAllFilters,
  getCurrentTabId,
  (filters: ProductFilter[], currentTabId: string): ProductFilter[] => {
    return (filters || []).filter(f => f.tabId === currentTabId);
  }
);

export const getAllFiltersIds = createSelector(getFiltersStateDetails, selectFilterIds);

export const getAllAcceptedFilters = createSelector(getTabFilters,
  (filters: ProductFilter[]) => {
    return filters.filter(f => (f.acceptedValues || []).length > 0);
  });

export const getAllSelectedFilters = createSelector(getTabFilters,
  (filters: ProductFilter[]) => {
    return filters.filter(f => (f.selectedValues || []).length > 0);
  });

export const getAllFiltersEntities = createSelector(getFiltersStateDetails, selectFiltersEntities);

// get filter by ID
export const getFilterEntityById = (id: string) => createSelector(getFiltersStateDetails, getEntityById(id));

export const getFilterValuesById = (id: string) =>
  createSelector(getFilterEntityById(id), (entity: ProductFilter) => entity ? entity.values : undefined);

export const getFilterSelectedValuesById = (id: string) =>
  createSelector(getFilterEntityById(id), (entity: ProductFilter) => entity ? entity.selectedValues : undefined);

export const getFilterLoadingById = (id: string) =>
  createSelector(getFilterEntityById(id), (entity: ProductFilter) => entity ? entity.isLoading : undefined);

// get TAB specific filter by FILTER ID
export const getCurrentTabFilterEntityByFilterId = (id: string) => createSelector(
  getFiltersStateDetails,
  getCurrentTabId,
  (state: EntityState<any>, currentTabId: string) => {
    return state.entities[getTabContextFilterKey(currentTabId, id)];
  }
);

export const getAllFiltersByFilterId = (filterId: string) => createSelector(
  getAllFilters,
  (state: ProductFilter[]) => {
    return state.filter(f => f.filterId === filterId);
  }
);
