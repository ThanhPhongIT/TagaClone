import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: async () =>
          (await import('@taga-now/taga-now/friends/feature/dashboard'))
            .TagaNowFriendsFeatureDashboardModule,
      },
      {
        path: 'groups/:uid',
        loadChildren: async () =>
          (await import('@taga-now/taga-now/friends/feature/groups'))
            .TagaNowFriendsFeatureGroupsModule,
      },
      {
        path: `detail/:uid`,
        loadChildren: async () =>
          (await import('@taga-now/taga-now/friends/feature/detail-profile'))
            .TagaNowFriendsFeatureDetailProfileModule,
      },
    ]),
  ],
})
export class TagaNowFriendsFeatureShellModule {}
