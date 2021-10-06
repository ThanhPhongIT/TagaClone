import { TagaNowAuthUiForgotPasswordModule } from './../../../ui/forgot-password/src/lib/taga-now-auth-ui-forgot-password.module';
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth.routes';
import { TagaNowAuthUiLayoutModule } from '@taga-now/taga-now/auth/ui/layout';
import { TagaNowAuthUiLoginModule } from '@taga-now/taga-now/auth/ui/login';
import { TagaNowAuthUiRegisterModule } from '@taga-now/taga-now/auth/ui/register';
@NgModule({
  imports: [
    CommonModule,
    TagaNowAuthUiLoginModule,
    TagaNowAuthUiRegisterModule,
    TagaNowAuthUiLayoutModule,
    TagaNowAuthUiForgotPasswordModule,
    RouterModule.forChild(authRoutes),
  ],
})
export class TagaNowAuthFeatureModule {}
