import { SharedUiAvatarModule } from './../../../../../../shared/ui/avatar/src/lib/shared-ui-avatar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanySideBarComponent } from './company-side-bar/company-side-bar.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';
import { tgnAdd } from '@taga-now/shared/ui/icon';
@NgModule({
  imports: [
    CommonModule,
    NzCollapseModule,
    RouterModule,
    ReactiveComponentModule,
    NzMenuModule,
    SharedUiAvatarModule,
    SvgIconsModule.forChild([tgnAdd]),
  ],
  declarations: [CompanySideBarComponent],
  exports: [CompanySideBarComponent],
})
export class TagaNowCompanyUiCompanySideBarModule {}
