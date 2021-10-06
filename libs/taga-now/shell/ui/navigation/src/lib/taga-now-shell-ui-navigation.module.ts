import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { TagaNowShellUiNavBarModule } from '@taga-now/taga-now/shell/ui/nav-bar';
import { TagaNowShellUiSideBarModule } from '@taga-now/taga-now/shell/ui/side-bar';
import { TagaNowShellUiResizerModule } from '@taga-now/taga-now/shell/ui/resizer';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { TagaNowFriendsUiSideBarModule } from '@taga-now/taga-now/friends/ui/side-bar';
import { TagaNowCompanyUiCompanySideBarModule } from '@taga-now/taga-now/company/ui/company-side-bar';
import { TagaNowMessageUiSideBarMsModule} from '@taga-now/taga-now/message/ui/side-bar-ms';
@NgModule({
  imports: [
    CommonModule,
    TagaNowShellUiNavBarModule,
    TagaNowShellUiSideBarModule,
    TagaNowShellUiResizerModule,
    TagaNowCompanyUiCompanySideBarModule,
    ReactiveComponentModule,
    NzTabsModule,
    TagaNowFriendsUiSideBarModule,
    TagaNowMessageUiSideBarMsModule
  ],
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
})
export class TagaNowShellUiNavigationModule {}
