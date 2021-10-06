import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainViewComponent } from './main-view/main-view.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [MainViewComponent],
  imports: [CommonModule, RouterModule],
  exports: [MainViewComponent],
})
export class TagaNowShellUiMainViewModule {}
