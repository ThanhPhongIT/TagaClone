import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsComponent } from './groups/groups.component';
import { RouterModule } from '@angular/router';
import { TagaNowFriendsUiGroupItemModule } from '@taga-now/taga-now/friends/ui/group-item';


@NgModule({
  imports: [
    CommonModule,
    TagaNowFriendsUiGroupItemModule,
    RouterModule.forChild([{ path: '', component: GroupsComponent }]),
  ],
  declarations: [GroupsComponent],
  exports: [GroupsComponent],
})
export class TagaNowFriendsFeatureGroupsModule {}
