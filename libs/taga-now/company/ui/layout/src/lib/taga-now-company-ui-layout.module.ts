import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { SharedUiWelcomeModule } from '@taga-now/shared/ui/welcome';
import { TagaNowCompanyUiTopBarModule } from '@taga-now/taga-now/company/ui/top-bar';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TagaNowCompanyUiTopBarModule,
    SharedUiWelcomeModule,
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class TagaNowCompanyUiLayoutModule {}
