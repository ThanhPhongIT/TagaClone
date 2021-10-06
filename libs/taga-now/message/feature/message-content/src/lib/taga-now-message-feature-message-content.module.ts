import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageContentComponent } from './message-content/message-content.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { TagaNowMessageUiMsMainHeaderModule } from '@taga-now/taga-now/message/ui/ms-main-header';
import { TagaNowMessageUiMsMainBodyModule } from '@taga-now/taga-now/message/ui/ms-main-body';
import { TagaNowMessageUiMsSidebarCardModule } from '@taga-now/taga-now/message/ui/ms-sidebar-card';
@NgModule({
  imports: [CommonModule, NzLayoutModule, TagaNowMessageUiMsMainHeaderModule, TagaNowMessageUiMsMainBodyModule, TagaNowMessageUiMsSidebarCardModule],
  declarations: [MessageContentComponent],
  exports: [MessageContentComponent],
})
export class TagaNowMessageFeatureMessageContentModule {}
