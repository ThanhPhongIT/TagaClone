import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseBorderRadiusComponent } from './base-border-radius/base-border-radius.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BaseBorderRadiusComponent],
  exports: [BaseBorderRadiusComponent],
})
export class SharedUiBaseBorderRadiusModule {}
