import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CompanyEmployeeComponent } from './company-employee/company-employee.component';
import { TagaNowFriendsUiGroupItemModule } from '@taga-now/taga-now/friends/ui/group-item';
import { SharedUiLayoutButtonModule } from '@taga-now/shared/ui/layout-button';
import { TagaNowCompanyUiRelatedWorkModule } from '@taga-now/taga-now/company/ui/related-work';
import { TagaNowCompanyUiAddEmployeeModalModule } from '@taga-now/taga-now/company/ui/add-employee-modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TagaNowFriendsUiGroupItemModule,
    TagaNowCompanyUiRelatedWorkModule,
    SharedUiLayoutButtonModule,
    TagaNowCompanyUiAddEmployeeModalModule,
    RouterModule.forChild([
      {
        path: ':id',
        component: CompanyEmployeeComponent,
      },
    ]),
  ],
  declarations: [CompanyEmployeeComponent],
})
export class TagaNowCompanyFeatureCompanyEmployeeModule {}
