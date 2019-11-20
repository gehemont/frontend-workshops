import { TabModel, TABS, TabsActions, TabsAddMany, tabsInitialState, tabsReducerMap, TabsState } from '../..';
import { createDefaultReducer } from '../../reducers.helpers';

describe('Tab reducer', () => {

  let state: TabsState;
  const reducer = createDefaultReducer<TABS, TabsState, TabsActions>(tabsInitialState, tabsReducerMap);

  let tabs: TabModel[];

  beforeEach(() => {
    state = { ...tabsInitialState };
    tabs = [
      {
        id: 'all-tab',
        titleTranslationKey: 'ALL'
      },
      {
        id: 'missing-prices-tab',
        titleTranslationKey: 'MISSING_PRICES'
      }
    ];
  });

  it('should add tabs', () => {
    const action = new TabsAddMany(tabs);
    const actual = reducer(state, action);
    expect(actual.ids[0]).toEqual(tabs[0].id);
    expect(actual.entities[tabs[0].id]).toEqual(tabs[0]);
  });

});
