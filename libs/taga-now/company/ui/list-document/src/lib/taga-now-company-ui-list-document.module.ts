import { SharedUiIconModule } from '@taga-now/shared/ui/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDocumentComponent } from './list-document/list-document.component';
import { NzTreeViewModule } from 'ng-zorro-antd/tree-view';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [CommonModule, NzTreeViewModule, NzIconModule,NzDropDownModule, SharedUiIconModule,],
  declarations: [ListDocumentComponent],
  exports: [ListDocumentComponent]
})
export class TagaNowCompanyUiListDocumentModule {}
