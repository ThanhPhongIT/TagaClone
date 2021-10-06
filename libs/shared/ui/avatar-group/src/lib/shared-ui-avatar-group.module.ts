import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarGroupComponent } from './avatar-group/avatar-group.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
@NgModule({
  imports: [CommonModule, NzAvatarModule],
  declarations: [AvatarGroupComponent],
  exports: [AvatarGroupComponent],
})
export class SharedUiAvatarGroupModule {}
