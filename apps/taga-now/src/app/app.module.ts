import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import vi from '@angular/common/locales/vi';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {
  ciAuthInterceptorProvider,
  CiAuthStateService,
} from '@consult-indochina/auth';
import { getAppConfigProvider } from '@taga-now/shared/app-config';
import { TagaNowShellFeatureModule } from '@taga-now/taga-now/shell/feature';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { IconDefinition } from '@ant-design/icons-angular';
registerLocaleData(vi);
import {
  AccountBookFill,
  AlertFill,
  AlertOutline,
} from '@ant-design/icons-angular/icons';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APIInterceptor } from './utils/interceptors/api.interceptor';
import { AppConfigService, ConfigModule } from './utils/services/app-config.service';

const icons: IconDefinition[] = [AccountBookFill, AlertOutline, AlertFill];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NzIconModule.forRoot(icons),
    TagaNowShellFeatureModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [CiAuthStateService],
      multi: true,
    },
    getAppConfigProvider(environment),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true,
    },
    ciAuthInterceptorProvider,
    // AppConfigService,
    // ConfigModule.init(),
    // unauthorizedInterceptorProvider,
  ],
})
export class AppModule {}

//Hack state library
function initializeApp(ciAuthStateService: CiAuthStateService): unknown {
  return () =>
    ciAuthStateService.set({
      TokenType: null,
    });
}
