import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { catchError, concatMap, map, mergeMap, tap } from 'rxjs/operators';
import { CompanyApiService } from '../../api';
import { Company } from '../../models/company.interface';
import {
  loadCompanies,
  loadCompaniesSuccess,
  setCompany,
  updateCompany,
} from './company.action';

@Injectable({ providedIn: 'root' })
export class CompanyEffect {
  loadCompanies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCompanies),
      mergeMap(() =>
        this.companyApi.getAllCompanies('').pipe(
          map((companies) =>
            loadCompaniesSuccess({
              companies: (companies as any) as Company[],
            })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  setCompanies$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setCompany),
        concatMap((action) => this.companyApi.createCompany(action.company)),
        tap(() => this.store.dispatch(loadCompanies()))
      ),
    { dispatch: false }
  );
  updateCompanies$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateCompany),
        concatMap((acticon) => {
          console.log(acticon);
          return this.companyApi.updateCompany(
            acticon.company.changes,
            acticon.company.id
          );
        }),
        tap(() => this.store.dispatch(loadCompanies()))
      ),
    { dispatch: false }
  );

  constructor(
    private store: Store,
    private actions$: Actions,
    private companyApi: CompanyApiService
  ) {}
}
