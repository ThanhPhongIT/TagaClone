import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentHistoryComponent } from './document-history/document-history.component';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  imports: [CommonModule, SvgIconsModule, NzDropDownModule],
  declarations: [DocumentHistoryComponent],
  exports: [DocumentHistoryComponent]
})
export class TagaNowCompanyUiDocumentHistoryModule {}
