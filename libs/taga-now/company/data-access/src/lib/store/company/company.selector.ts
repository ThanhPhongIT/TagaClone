import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  companiesFeatureKey,
  CompaniesState,
  selectAll,
  selectIds
} from './company.reducer';

export const getCompaniesState = createFeatureSelector<CompaniesState>(
  companiesFeatureKey
);

export const getCompanies = createSelector(getCompaniesState, selectAll);
export const getCompanyById = createSelector(getCompaniesState, selectIds);
// export const getCompaniesLoading = createSelector(
//   getCompaniesState,
//   (state: CompaniesState) => state
// );
