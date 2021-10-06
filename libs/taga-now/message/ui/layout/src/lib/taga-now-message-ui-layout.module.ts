import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutMsComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule,RouterModule,],
  declarations: [LayoutMsComponent],
  exports: [LayoutMsComponent]
})
export class TagaNowMessageUiLayoutModule {}
