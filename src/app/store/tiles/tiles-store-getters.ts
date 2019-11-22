import { TileConfig, TileState } from './tile.models';
import { createSelector } from 'reselect';
import { getReportDetailsState } from '../report-details-store-getters';
import { ReportDetailsState } from '../report-details.models';
import { values } from 'lodash';
import { TileValuesState } from './tile-values.reducer';
import { BudgetData, TotalBudgetData } from './tile-value.models';

// node selectors
export const getTilesState = createSelector(
  getReportDetailsState,
  (state: ReportDetailsState): TileState => state.tiles
);

export const getTilesStateValues = createSelector(
  getReportDetailsState,
  (state: ReportDetailsState): TileValuesState => state.tileValues
);

// selectors
export const getTiles = createSelector(getTilesState,
  (state: TileState): TileConfig[] => values(state));

export const getTileValuesById = <T extends TotalBudgetData | BudgetData>(tileId: string) => createSelector(getTilesStateValues,
  (state: TileValuesState): T => {
    return tileId &&  state && state[tileId] && state[tileId].value ? state[tileId].value as T : undefined;
  });

export const getTileLoadingStateById = (tileId: string) => createSelector(getTilesStateValues,
  (state: TileValuesState): boolean => {
    return tileId && state[tileId] ? state[tileId].loading : false;
  });
