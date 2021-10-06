import { SvgIconsModule } from '@ngneat/svg-icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCompanyModalComponent } from './edit-company-modal/edit-company-modal.component';

@NgModule({
  imports: [CommonModule, SvgIconsModule],
  declarations: [EditCompanyModalComponent],
})
export class TagaNowCompanyUiEditCompanyModalModule {}
