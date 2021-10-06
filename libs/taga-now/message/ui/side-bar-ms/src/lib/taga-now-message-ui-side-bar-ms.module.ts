import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarMsComponent } from './side-bar-ms/side-bar-ms.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzListModule } from 'ng-zorro-antd/list';

@NgModule({
  
  imports: [CommonModule,NzCollapseModule,NzListModule ],
  declarations: [SideBarMsComponent],
  exports: [SideBarMsComponent]
})
export class TagaNowMessageUiSideBarMsModule {}
