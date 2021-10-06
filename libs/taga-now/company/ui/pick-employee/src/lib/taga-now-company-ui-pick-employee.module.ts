import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickEmployeeComponent } from './pick-employee/pick-employee.component';
import { SharedUiBaseBorderRadiusModule } from '@taga-now/shared/ui/base-border-radius';
import { SharedUiAvatarModule } from '@taga-now/shared/ui/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
@NgModule({
  imports: [
    CommonModule,
    SharedUiBaseBorderRadiusModule,
    SharedUiAvatarModule,
    NzIconModule,
  ],
  declarations: [PickEmployeeComponent],
  exports: [PickEmployeeComponent],
})
export class TagaNowCompanyUiPickEmployeeModule {}
