import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPersonalComponent } from './contact-personal/contact-personal.component';
import { SvgIconsModule } from '@ngneat/svg-icon';

@NgModule({
  imports: [CommonModule, SvgIconsModule],
  declarations: [ContactPersonalComponent],
  exports: [ContactPersonalComponent],
})
export class TagaNowUserUiContactPersonalModule {}
