import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  DashboardComponent,
  TagaNowHomeUiDashboardModule,
} from '@taga-now/taga-now/home/ui/dashboard';
@NgModule({
  imports: [
    CommonModule,
    TagaNowHomeUiDashboardModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
    ]),
  ],
})
export class TagaNowHomeFeatureModule {}
