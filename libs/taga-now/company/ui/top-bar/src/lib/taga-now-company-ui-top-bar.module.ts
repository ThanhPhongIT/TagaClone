import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [CommonModule, RouterModule, NzMenuModule],
  declarations: [TopBarComponent],
  exports: [TopBarComponent],
})
export class TagaNowCompanyUiTopBarModule {}
