import { Action } from '@ngrx/store';
import { setPrefix } from '../../action.helpers';
import { TabModel } from './tabs.models';

// tslint:disable-next-line
export class TABS {
  static ADD_MANY = setPrefix('[TABS] Add Many');
  static SELECT_TAB = setPrefix('[TABS] Select Tab');
  static UPDATE_TAB = setPrefix('[TABS] Update Current Tab');
}

export class TabsAddMany implements Action {
  readonly type = TABS.ADD_MANY;

  constructor(public tabs: TabModel[]) {
  }
}

export class SelectTab implements Action {
  readonly type = TABS.SELECT_TAB;

  constructor(public id: string) {
  }
}

export class UpdateTab implements Action {
  readonly type = TABS.UPDATE_TAB;

  constructor(public id: string,
              public changes: Partial<TabModel>) {
  }
}

export type TabsActions = TabsAddMany | SelectTab | UpdateTab;
