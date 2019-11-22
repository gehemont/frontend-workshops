import * as ta from './tiles.actions';
import { TileState } from './tile.models';

export const TOTAL_BUDGET_TILE_TYPE = 'total-budget';
export const BUDGET_TILE_TYPE = 'budgets';

export const reducer = (state: TileState = {}, action: ta.Actions): TileState => {
  switch (action.type) {
    default:
      return state;
  }
};
