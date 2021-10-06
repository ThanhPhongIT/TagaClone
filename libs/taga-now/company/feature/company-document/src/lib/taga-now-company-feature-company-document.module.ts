import { TagaNowCompanyUiDocumentHistoryModule } from './../../../../ui/document-history/src/lib/taga-now-company-ui-document-history.module';
import { SharedUiLayoutButtonModule } from '@taga-now/shared/ui/layout-button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CompanyDocumentComponent } from './company-document/company-document.component';
import { TagaNowCompanyUiListDocumentModule } from '@taga-now/taga-now/company/ui/list-document';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { SvgIconsModule } from '@ngneat/svg-icon';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: ':id', component: CompanyDocumentComponent },
    ]),
    SharedUiLayoutButtonModule,
    TagaNowCompanyUiListDocumentModule,
    NzLayoutModule,
    NzTabsModule,
    SvgIconsModule,
    TagaNowCompanyUiDocumentHistoryModule
  ],
  declarations: [
    CompanyDocumentComponent,
  ],
  exports: [
    CompanyDocumentComponent
  ]
})
export class TagaNowCompanyFeatureCompanyDocumentModule {}
