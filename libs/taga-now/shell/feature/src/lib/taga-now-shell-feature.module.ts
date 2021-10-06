import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CiAuthModule } from '@consult-indochina/auth';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedUiIconModule } from '@taga-now/shared/ui/icon';
import { TagaNowShellUiLayoutModule } from '@taga-now/taga-now/shell/ui/layout';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { extModules } from './build-specifics';
import { tgnShellRoutes } from './tgn-shell.routes';
registerLocaleData(en);

const rootReducers = {};

@NgModule({
  imports: [
    CommonModule,
    SharedUiIconModule,
    TagaNowShellUiLayoutModule,
    RouterModule.forRoot(tgnShellRoutes, {
      scrollPositionRestoration: 'top',
    }),
    StoreModule.forRoot(rootReducers),
    EffectsModule.forRoot(),
    CiAuthModule.forRoot({
      API_URL: 'http://54.169.107.162/taganow/api',
      PermissionNames: [],
      uiOption: 'custom',
    }),
    // SettingsModule,
    ...extModules,
  ],
  exports: [RouterModule],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    // {
    //   provide: ErrorHandler,
    //   useValue: Sentry.createErrorHandler({
    //     showDialog: true,
    //   }),
    // },
  ],
  declarations: [],
})
export class TagaNowShellFeatureModule {}
