import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { TagaNowShellUiNavigationModule } from '@taga-now/taga-now/shell/ui/navigation';
import { TagaNowShellUiMainViewModule } from '@taga-now/taga-now/shell/ui/main-view';
import { TagaNowShellUiTopBarModule } from '@taga-now/taga-now/shell/ui/top-bar';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TagaNowShellUiMainViewModule,
    TagaNowShellUiTopBarModule,
    TagaNowShellUiNavigationModule,
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class TagaNowShellUiLayoutModule {}
