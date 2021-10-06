import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  TagaNowCompanyUiLayoutModule,
  LayoutComponent,
} from '@taga-now/taga-now/company/ui/layout';
import { SideBarType } from '@taga-now/shared/data-access/store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  companiesFeatureKey,
  companiesReducer,
  CompanyEffect,
} from '@taga-now/taga-now/company/data-access';
@NgModule({
  imports: [
    CommonModule,
    TagaNowCompanyUiLayoutModule,
    StoreModule.forFeature(companiesFeatureKey, companiesReducer),
    EffectsModule.forFeature([CompanyEffect]),
    RouterModule.forChild([
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: 'document',
            data: {
              title: 'Quản lý tài liệu công ty',
              type: SideBarType.company,
            },
            loadChildren: async () =>
              (
                await import(
                  '@taga-now/taga-now/company/feature/company-document'
                )
              ).TagaNowCompanyFeatureCompanyDocumentModule,
          },
          {
            path: 'employee',
            data: {
              title: 'Quản lý nhân viên công ty',
              type: SideBarType.company,
            },
            loadChildren: async () =>
              (
                await import(
                  '@taga-now/taga-now/company/feature/company-employee'
                )
              ).TagaNowCompanyFeatureCompanyEmployeeModule,
          },
          {
            path: 'info',
            data: {
              title: 'Thông tin công ty',
              type: SideBarType.company,
            },
            loadChildren: async () =>
              (await import('@taga-now/taga-now/company/feature/company-info'))
                .TagaNowCompanyFeatureCompanyInfoModule,
          },
          {
            path: 'project',
            data: {
              title: 'Quản lý dự án công ty',
              type: SideBarType.company,
            },
            loadChildren: async () =>
              (
                await import(
                  '@taga-now/taga-now/company/feature/company-project'
                )
              ).TagaNowCompanyFeatureCompanyProjectModule,
          },
        ],
      },
    ]),
  ],
})
export class TagaNowCompanyFeatureShellModule {}
