import { createEntityAdapter, Dictionary, EntityState } from '@ngrx/entity';
import { createSelector } from '@ngrx/store';
import { ReducerMapType } from '../../reducers.helpers';
import { ProductsState } from '../products.models';
import { getProductsState } from '../products.selectors';
import { SelectTab, TABS, TabsActions, TabsAddMany, UpdateTab } from './tabs.actions';
import { TabModel } from './tabs.models';

export interface TabsState extends EntityState<TabModel> {
  currentTabId: string;
}

const tabsAdapter = createEntityAdapter<TabModel>();

export const tabsInitialState: TabsState = {
  ...tabsAdapter.getInitialState(),
  currentTabId: undefined
};

export const tabsReducerMap: ReducerMapType<TABS, TabsState, TabsActions> = {
  [TABS.ADD_MANY]: (state: TabsState, action: TabsAddMany): TabsState =>
    tabsAdapter.addMany(action.tabs, state),
  [TABS.SELECT_TAB]: (state: TabsState, action: SelectTab): TabsState => {
    return { ...state, currentTabId: action.id };
  },
  [TABS.UPDATE_TAB]: (state: TabsState, action: UpdateTab) => tabsAdapter.updateOne({
    id: action.id,
    changes: action.changes,
  }, state)
};

const selectAllTabs = tabsAdapter.getSelectors().selectAll;
const selectAllTabsEntities = tabsAdapter.getSelectors().selectEntities;

export const getTabsState = createSelector(getProductsState,
  (state: ProductsState): TabsState => {
    return state.tabs;
  });

export const getAllTabs = createSelector(getTabsState, selectAllTabs);
export const getAllTabsEntities = createSelector(getTabsState, selectAllTabsEntities);

export const getCurrentTabId = createSelector(getTabsState,
  (state: TabsState): string => {
    return state.currentTabId;
  });

export const getCurrentTab = createSelector(getAllTabsEntities, getCurrentTabId,
  (entities: Dictionary<TabModel>, id: string): TabModel => {
    return entities[id];
  });

export const getCurrentTabSearchTriggered = createSelector(getCurrentTab,
  (state: TabModel): boolean => {
    return state && state.searchTriggered;
  });
