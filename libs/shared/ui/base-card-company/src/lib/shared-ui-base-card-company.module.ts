import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { BaseCardCompanyComponent } from './base-card-company/base-card-company.component';
@NgModule({
  imports: [CommonModule, SvgIconsModule],
  declarations: [BaseCardCompanyComponent],
  exports: [BaseCardCompanyComponent],
})
export class SharedUiBaseCardCompanyModule {}
