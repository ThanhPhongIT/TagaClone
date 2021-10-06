import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CompanyProjectComponent } from './company-project/company-project.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':id',
        component: CompanyProjectComponent,
      },
    ]),
  ],
  declarations: [CompanyProjectComponent],
})
export class TagaNowCompanyFeatureCompanyProjectModule {}
