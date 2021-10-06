import { TagaNowShellUiLogoutModalModule } from './../../../logout-modal/src/lib/taga-now-shell-ui-logout-modal.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconDefinition } from '@ant-design/icons-angular';
import {
  CloseOutline,
  EditOutline,
  PlusOutline,
  QuestionCircleFill,
  SearchOutline,
  TwitterOutline,
} from '@ant-design/icons-angular/icons';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TagaNowShellUiUserDropdownModule } from '@taga-now/taga-now/shell/ui/user-dropdown';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { ReactiveComponentModule } from '@ngrx/component';
import { RouterModule } from '@angular/router';
export const NZ_JIRA_ICONS: IconDefinition[] = [
  QuestionCircleFill,
  PlusOutline,
  SearchOutline,
  CloseOutline,
  TwitterOutline,
  EditOutline,
];

@NgModule({
  imports: [
    CommonModule,
    NzIconModule.forChild(NZ_JIRA_ICONS),
    NzToolTipModule,
    NzModalModule,
    NzDrawerModule,
    RouterModule,
    SvgIconsModule,
    ReactiveComponentModule,
    NzPopoverModule,
    TagaNowShellUiUserDropdownModule,
    TagaNowShellUiLogoutModalModule
  ],
  declarations: [NavBarComponent],
  exports: [NavBarComponent],
})
export class TagaNowShellUiNavBarModule {}
