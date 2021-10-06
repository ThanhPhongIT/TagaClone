import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupItemComponent } from './group-item/group-item.component';
import { TagaNowFriendsUiGrCardModule } from '@taga-now/taga-now/friends/ui/gr-card';

@NgModule({
  imports: [CommonModule, TagaNowFriendsUiGrCardModule],
  declarations: [GroupItemComponent],
  exports: [GroupItemComponent],
})
export class TagaNowFriendsUiGroupItemModule {}
