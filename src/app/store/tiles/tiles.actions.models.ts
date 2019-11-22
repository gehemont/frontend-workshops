import { BudgetData, TotalBudgetData } from './tile-value.models';

export interface TileBaseModel {
  id: string;
}

export interface BudgetTileModel extends TileBaseModel {
  providerType: string;
}

export interface LoadTileDataSuccessModel extends TileBaseModel {
  value: TileValue;
}

export type TileValue = TotalBudgetData | BudgetData;
