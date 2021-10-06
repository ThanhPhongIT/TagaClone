import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalLayoutComponent } from './modal-layout/modal-layout.component';
import { SharedUiIconModule } from '@taga-now/shared/ui/icon';
import { SharedUiButtonModule } from '@taga-now/shared/ui/button';
@NgModule({
  imports: [CommonModule, SharedUiIconModule, SharedUiButtonModule],
  declarations: [ModalLayoutComponent],
  exports: [ModalLayoutComponent],
})
export class SharedUiModalLayoutModule {}
