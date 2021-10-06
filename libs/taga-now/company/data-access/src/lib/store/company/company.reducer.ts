import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Company } from '../../models';
import {
  loadCompanies,
  loadCompaniesSuccess,
  setCompany,
  updateCompany,
} from './company.action';
// eslint-disable-next-line

export interface CompaniesState extends EntityState<Company> {
  data: Company;
  status: 'success';
  error: null;
  companiesLoaded: boolean;
}

export const companiesFeatureKey = 'companies';

export const adapter: EntityAdapter<Partial<Company>> = createEntityAdapter<Partial<Company>>({
  selectId: (companies) => companies.CompanyId || -1,
});

export const initialState = adapter.getInitialState({
  status: 'success',
  error: null,
  companiesLoaded: false,
});

export const companiesReducer = createReducer(
  initialState,
  on(loadCompanies, (state) => ({
    ...state,
    status: 'loading',
    error: null,
  })),
  on(loadCompaniesSuccess, (state, action) => {
    return adapter.setAll(action.companies, {
      ...state,
      status: 'success',
      error: null,
      companiesLoaded: true,
    });
  }),

  on(setCompany, (state, { company }) => {
    return adapter.addOne(company, state);
  }),
  on(updateCompany, (state, { company }) => {
    return adapter.updateOne(company, state);
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();
