import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsSidebarCardComponent } from './ms-sidebar-card/ms-sidebar-card.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzListModule } from 'ng-zorro-antd/list';

@NgModule({
  imports: [CommonModule, NzCollapseModule, NzListModule],
  declarations: [MsSidebarCardComponent],
  exports: [MsSidebarCardComponent]
})
export class TagaNowMessageUiMsSidebarCardModule {}
