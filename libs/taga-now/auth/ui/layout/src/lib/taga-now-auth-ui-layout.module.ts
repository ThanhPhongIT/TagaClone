import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

import { CiAuthModule } from '@consult-indochina/auth';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [AuthLayoutComponent],
  exports: [AuthLayoutComponent],
})
export class TagaNowAuthUiLayoutModule {}
