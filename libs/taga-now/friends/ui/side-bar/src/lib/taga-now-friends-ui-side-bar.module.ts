import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SharedUiAvatarModule } from '@taga-now/shared/ui/avatar';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [CommonModule, SharedUiAvatarModule, SvgIconsModule, NzMenuModule, RouterModule],
  declarations: [SideBarComponent],
  exports: [SideBarComponent],
})
export class TagaNowFriendsUiSideBarModule {}
