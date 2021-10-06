import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Company, CompanyCreate } from '../../models';

export const loadCompanies = createAction('[Company Page/API]');

export const loadCompaniesSuccess = createAction(
  '[Company Page/API success]',
  props<{
    companies: Company[];
  }>()
);

export const setCompany = createAction(
  '[Company Page/API success] Set Company',
  props<{ company: CompanyCreate }>()
);

export const updateCompany = createAction(
  '[Company Page/API success] Update Company',
  props<{ company: Update<Company> }>()
);

export const loadCompaniesError = createAction(
  '[Company Page/API error]',
  props<{ error: string }>()
);
