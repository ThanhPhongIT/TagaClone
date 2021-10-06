import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserItemComponent } from './user-item/user-item.component';
import { RouterModule } from '@angular/router';
import { SharedUiAvatarModule } from '@taga-now/shared/ui/avatar';
import { SharedUiBaseCardCompanyModule } from '@taga-now/shared/ui/base-card-company';
import { SharedUiNoBorderCardModule } from '@taga-now/shared/ui/no-border-card';
import { SharedUiButtonModule } from '@taga-now/shared/ui/button';
import { TagaNowUserUiContactPersonalModule } from '@taga-now/taga-now/user/ui/contact-personal';
import { TagaNowUserUiInfoPersonalModule } from '@taga-now/taga-now/user/ui/info-personal';
import { TagaNowUserUiExpPersonalModule } from '@taga-now/taga-now/user/ui/exp-personal';
import { TagaNowUserUiActivitiesPersonalModule } from '@taga-now/taga-now/user/ui/activities-personal';
import { TagaNowUserUiCertificatePersonalModule } from '@taga-now/taga-now/user/ui/certificate-personal';
import { TagaNowUserUiSkillPersonalModule } from '@taga-now/taga-now/user/ui/skill-personal';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveComponentModule,
    SharedUiAvatarModule,
    SharedUiNoBorderCardModule,
    TagaNowUserUiContactPersonalModule,
    TagaNowUserUiInfoPersonalModule,
    TagaNowUserUiExpPersonalModule,
    TagaNowUserUiActivitiesPersonalModule,
    TagaNowUserUiCertificatePersonalModule,
    TagaNowUserUiSkillPersonalModule,
    SvgIconsModule,
    SharedUiBaseCardCompanyModule,
    SharedUiButtonModule,

  ],
  declarations: [UserItemComponent],
  exports: [UserItemComponent],
})
export class TagaNowFriendsUiUserItemModule {}
