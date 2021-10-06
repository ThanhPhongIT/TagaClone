import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizerComponent } from './resizer/resizer.component';
import { SvgIconsModule } from '@ngneat/svg-icon';
@NgModule({
  imports: [CommonModule, SvgIconsModule],
  declarations: [ResizerComponent],
  exports: [ResizerComponent],
})
export class TagaNowShellUiResizerModule {}
