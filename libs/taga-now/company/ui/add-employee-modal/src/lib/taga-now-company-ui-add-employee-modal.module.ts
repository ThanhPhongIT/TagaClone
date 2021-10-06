import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeModalComponent } from './add-employee-modal/add-employee-modal.component';
import { SharedUiModalLayoutModule } from '@taga-now/shared/ui/modal-layout';
import { TagaNowCompanyUiCheckboxModule } from '@taga-now/taga-now/company/ui/checkbox';
import { TagaNowCompanyUiPickEmployeeModule } from '@taga-now/taga-now/company/ui/pick-employee';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddGroupEmployeeModalComponent } from './add-group-employee-modal/add-group-employee-modal.component';
@NgModule({
  imports: [
    CommonModule,
    SharedUiModalLayoutModule,
    TagaNowCompanyUiCheckboxModule,
    FormsModule,
  ],
  declarations: [AddEmployeeModalComponent, AddGroupEmployeeModalComponent],
  exports: [AddEmployeeModalComponent, AddGroupEmployeeModalComponent],
})
export class TagaNowCompanyUiAddEmployeeModalModule {}
