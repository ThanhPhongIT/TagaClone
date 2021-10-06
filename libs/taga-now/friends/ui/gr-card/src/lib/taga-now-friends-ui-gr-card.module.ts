import { SharedUiSearchInputModule } from './../../../../../../shared/ui/search-input/src/lib/shared-ui-search-input.module';
import { SharedUiBaseBorderRadiusModule } from './../../../../../../shared/ui/base-border-radius/src/lib/shared-ui-base-border-radius.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrCardComponent } from './gr-card/gr-card.component';
import { SharedUiBoxsCardModule } from '@taga-now/shared/ui/boxs-card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { SharedUiButtonModule } from '@taga-now/shared/ui/button';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { OverlayModule } from '@angular/cdk/overlay';
import { TagaNowFriendsUiContextMenuModule } from '@taga-now/taga-now/friends/ui/context-menu';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

@NgModule({
  imports: [
    CommonModule,
    SharedUiBoxsCardModule,
    SharedUiButtonModule,
    NzAvatarModule,
    SvgIconsModule,
    NzDropDownModule,
    OverlayModule,
    TagaNowFriendsUiContextMenuModule,
    NzPopoverModule,
    FormsModule,
    NzMenuModule,
    NzRadioModule,
    SharedUiBaseBorderRadiusModule,
    SharedUiSearchInputModule,
  ],
  declarations: [GrCardComponent],
  exports: [GrCardComponent],
})
export class TagaNowFriendsUiGrCardModule {}
