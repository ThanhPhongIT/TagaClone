import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDropdownComponent } from './user-dropdown/user-dropdown.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { SharedUiAvatarModule } from '@taga-now/shared/ui/avatar';
@NgModule({
  imports: [
    CommonModule,
    NzDropDownModule,
    SharedUiAvatarModule,
    SvgIconsModule,
  ],
  declarations: [UserDropdownComponent],
  exports: [UserDropdownComponent],
})
export class TagaNowShellUiUserDropdownModule {}
