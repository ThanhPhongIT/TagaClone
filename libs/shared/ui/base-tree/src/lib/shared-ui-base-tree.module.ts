import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseTreeComponent } from './base-tree/base-tree.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PortalModule } from '@angular/cdk/portal';
import { CdkTreeModule } from '@angular/cdk/tree';

@NgModule({
  imports: [CommonModule, ScrollingModule, CdkTreeModule, PortalModule],
  declarations: [BaseTreeComponent],
  exports: [BaseTreeComponent],
})
export class SharedUiBaseTreeModule {}
