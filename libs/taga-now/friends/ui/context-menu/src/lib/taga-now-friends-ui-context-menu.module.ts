import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { SharedUiBaseBorderRadiusModule } from '@taga-now/shared/ui/base-border-radius';
import { SharedUiSearchInputModule } from '@taga-now/shared/ui/search-input';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SvgIconsModule,
    NzMenuModule,
    NzRadioModule,
    SharedUiBaseBorderRadiusModule,
    SharedUiSearchInputModule,
  ],
  declarations: [ContextMenuComponent],
  exports: [ContextMenuComponent],
})
export class TagaNowFriendsUiContextMenuModule {}
