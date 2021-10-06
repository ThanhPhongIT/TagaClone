import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedUiWelcomeModule } from '@taga-now/shared/ui/welcome';
@NgModule({
  imports: [CommonModule, SharedUiWelcomeModule],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
})
export class TagaNowHomeUiDashboardModule {}
