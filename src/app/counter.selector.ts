import {createFeatureSelector, createSelector} from '@ngrx/store';
import { customerFeatureKey } from './counter.reducer';


export const selectCounter = createSelector(
    createFeatureSelector('count'),
  (state:any) => state
);


export const selectUser = createSelector(
    createFeatureSelector(customerFeatureKey),
  (state:any) => state
);