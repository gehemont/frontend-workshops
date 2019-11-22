import * as ta from './tiles.actions';
import * as fromTileValue from './tile-value.reducer';
import { TileBase } from './tile-value.reducer';
import { ByIdState } from './tile.models';

/* tslint:disable:no-empty-interface */
export interface TileValuesState extends ByIdState<TileBase> {
}

export const reducer = (state: TileValuesState = {}, action: ta.Actions): TileValuesState => {
  switch (action.type) {
    case ta.LOAD_TOTAL_BUDGET_TILE_DATA:
    case ta.LOAD_BUDGET_TILE_DATA:
    case ta.LOAD_TILE_DATA_SUCCESS:
    case ta.LOAD_TILE_DATA_FAILED:
      const tile = state[action.payload.id];
      return { ...state, [action.payload.id]: fromTileValue.reducer(tile, action) };
    default:
      return state;
  }
};
