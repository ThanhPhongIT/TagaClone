import { TagaNowCompanyUiEditCompanyModalModule } from './../../../../ui/edit-company-modal/src/lib/taga-now-company-ui-edit-company-modal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { SharedUiNoBorderCardModule } from '@taga-now/shared/ui/no-border-card';
import { SvgIconsModule } from '@ngneat/svg-icon';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':id',
        component: CompanyInfoComponent,
      },
    ]),
    SharedUiNoBorderCardModule,
    SvgIconsModule,
    TagaNowCompanyUiEditCompanyModalModule,
  ],
  declarations: [CompanyInfoComponent],
})
export class TagaNowCompanyFeatureCompanyInfoModule {}
