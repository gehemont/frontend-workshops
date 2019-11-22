import { BudgetTileModel, LoadTileDataSuccessModel, TileBaseModel } from './tiles.actions.models';
import { ActionWithPayload } from './tile.models';

export const LOAD_TOTAL_BUDGET_TILE_DATA = '[RD][TILES] Load total budget tile data';
export const LOAD_BUDGET_TILE_DATA = '[RD][TILES] Load budget tile data';
export const LOAD_TILE_DATA_SUCCESS = '[RD][TILES] Load tile success';
export const LOAD_TILE_DATA_FAILED = '[RD][TILES] Load tile failed';
export const LOAD_TILE_DATA_ERROR = '[RD][TILES] Load tile error. Tile type not recognized';

export class LoadBudgetTileData implements ActionWithPayload<BudgetTileModel> {
  readonly type = LOAD_BUDGET_TILE_DATA;

  constructor(public payload: BudgetTileModel) {
  }
}

export class LoadTotalBudgetTileData implements ActionWithPayload<BudgetTileModel> {
  readonly type = LOAD_TOTAL_BUDGET_TILE_DATA;

  constructor(public payload: BudgetTileModel) {
  }
}

export class LoadTileDataError implements ActionWithPayload<TileBaseModel> {
  readonly type = LOAD_TILE_DATA_ERROR;

  constructor(public payload: TileBaseModel) {
  }
}

export class LoadTileDataSuccess implements ActionWithPayload<LoadTileDataSuccessModel> {
  readonly type = LOAD_TILE_DATA_SUCCESS;

  constructor(public payload: LoadTileDataSuccessModel) {
  }
}

export class LoadTileDataFailed implements ActionWithPayload<TileBaseModel> {
  readonly type = LOAD_TILE_DATA_FAILED;

  constructor(public payload: TileBaseModel) {
  }
}

export type Actions
  = LoadTotalBudgetTileData
  | LoadTileDataSuccess
  | LoadTileDataFailed
  | LoadTileDataError
  | LoadBudgetTileData;
