import * as ta from './tiles.actions';
import { BudgetData, TotalBudgetData } from './tile-value.models';

export type TileValue = TotalBudgetData | BudgetData;

export interface TileBase {
  loading?: boolean;
  value?: TileValue;
}

export const reducer = (state: TileBase = {}, action: ta.Actions): TileBase => {
  switch (action.type) {
    case ta.LOAD_TOTAL_BUDGET_TILE_DATA:
    case ta.LOAD_BUDGET_TILE_DATA:
      return { ...state, value: undefined, loading: true };
    case ta.LOAD_TILE_DATA_SUCCESS:
      return {
        ...state,
        value: action.payload.value,
        loading: false
      };
    case ta.LOAD_TILE_DATA_FAILED:
      return { ...state, value: undefined, loading: false };
    default:
      return state;
  }
};
