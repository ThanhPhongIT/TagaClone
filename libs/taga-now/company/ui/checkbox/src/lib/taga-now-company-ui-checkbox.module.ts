import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TagaNowCompanyUiPickEmployeeModule } from '@taga-now/taga-now/company/ui/pick-employee';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedUiAvatarModule } from '@taga-now/shared/ui/avatar';
import { SharedUiBaseBorderRadiusModule } from '@taga-now/shared/ui/base-border-radius';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { InputComponent } from './input/input.component';
@NgModule({
  imports: [
    CommonModule,
    TagaNowCompanyUiPickEmployeeModule,
    FormsModule,
    ReactiveFormsModule,
    SharedUiAvatarModule,
    SharedUiBaseBorderRadiusModule,
    NzRadioModule,
  ],
  declarations: [CheckboxComponent, RadioButtonComponent, InputComponent],
  exports: [CheckboxComponent, RadioButtonComponent, InputComponent],
})
export class TagaNowCompanyUiCheckboxModule {}
