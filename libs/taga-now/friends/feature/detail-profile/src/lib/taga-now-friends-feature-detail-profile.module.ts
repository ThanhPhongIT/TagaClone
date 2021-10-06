import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DetailProfileComponent } from './detail-profile/detail-profile.component';
import { TagaNowFriendsUiUserItemModule } from '@taga-now/taga-now/friends/ui/user-item';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DetailProfileComponent }]),
    TagaNowFriendsUiUserItemModule
  ],
  declarations: [DetailProfileComponent],
  exports: [DetailProfileComponent],
})
export class TagaNowFriendsFeatureDetailProfileModule {}
