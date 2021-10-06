import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedUiWelcomeModule } from '@taga-now/shared/ui/welcome';
import { RouterModule } from '@angular/router';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DashboardComponent }]),
    SharedUiWelcomeModule,
    NzDropDownModule,
    PortalModule,
    OverlayModule,
  ],
  declarations: [DashboardComponent],
})
export class TagaNowFriendsFeatureDashboardModule {}
