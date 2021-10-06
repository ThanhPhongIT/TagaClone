import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutButtonComponent } from './layout-button/layout-button.component';
import { SharedUiBaseBorderRadiusModule } from '@taga-now/shared/ui/base-border-radius';
import { SharedUiIconModule } from '@taga-now/shared/ui/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
@NgModule({
  imports: [
    CommonModule,
    SharedUiBaseBorderRadiusModule,
    SharedUiIconModule,
    NzDropDownModule,
  ],
  declarations: [LayoutButtonComponent],
  exports: [LayoutButtonComponent],
})
export class SharedUiLayoutButtonModule {}
