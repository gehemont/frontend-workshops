import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { ApplicationState } from './store';
import { CONFIG_PREFIX } from '../app.constants';

export const getReportDesignerFeatureSelector: MemoizedSelector<object, ApplicationState> =
  createFeatureSelector<ApplicationState>(CONFIG_PREFIX);
