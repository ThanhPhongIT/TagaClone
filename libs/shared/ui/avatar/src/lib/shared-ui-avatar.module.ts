import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
@NgModule({
  imports: [CommonModule, NzAvatarModule],
  declarations: [AvatarComponent],
  exports: [AvatarComponent],
})
export class SharedUiAvatarModule {}
