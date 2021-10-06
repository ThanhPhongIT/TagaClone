import { NzModalModule } from 'ng-zorro-antd/modal';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutModalComponent } from './logout-modal/logout-modal.component';

@NgModule({
  imports: [CommonModule, SvgIconsModule,NzModalModule],
  declarations: [LogoutModalComponent],
  exports: [LogoutModalComponent]
})
export class TagaNowShellUiLogoutModalModule {}
