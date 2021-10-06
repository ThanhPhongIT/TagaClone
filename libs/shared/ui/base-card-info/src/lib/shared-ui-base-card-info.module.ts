import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseCardInfoComponent } from './base-card-info/base-card-info.component';
import { SvgIconsModule } from '@ngneat/svg-icon';

@NgModule({
  imports: [CommonModule, SvgIconsModule],
  declarations: [BaseCardInfoComponent],
  exports: [BaseCardInfoComponent],
})
export class SharedUiBaseCardInfoModule {}
