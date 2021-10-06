import { AuthGuard } from '../../../../../../apps/taga-now/src/app/utils/guards/auth.guard';

/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Routes } from '@angular/router';
import { CiAuthGuard } from '@consult-indochina/auth';
import { SideBarType } from '@taga-now/shared/data-access/store';
import { LayoutComponent } from '@taga-now/taga-now/shell/ui/layout';
// import { CiAuthGuard } from './auth.guard';
export const tgnShellRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'document',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: async () =>
          (await import('@taga-now/taga-now/home/feature'))
            .TagaNowHomeFeatureModule,
        data: {
          title: 'Trang chủ',
          type: SideBarType.home,
        },
      },
      {
        path: 'friends',
        loadChildren: async () =>
          (await import('@taga-now/taga-now/friends/feature/shell'))
            .TagaNowFriendsFeatureShellModule,
        data: {
          title: 'Quản lý bạn bè',
          type: SideBarType.friends,
        },
      },
      {
        path: 'company',
        data: {
          title: 'Quản lý công ty',
          type: SideBarType.company,
        },
        loadChildren: async () =>
          (await import('@taga-now/taga-now/company/feature/shell'))
            .TagaNowCompanyFeatureShellModule,
      },
      {
        path: 'tasks',
        loadChildren: async () =>
          (await import('@taga-now/taga-now/tasks/feature/shell'))
            .TagaNowTasksFeatureShellModule,
        data: {
          title: 'Dự án',
          type: SideBarType.task,
        },
      },
      {
        path: 'document',
        loadChildren: async () =>
          (await import('@taga-now/taga-now/document/feature/shell'))
            .TagaNowDocumentFeatureShellModule,
        data: {
          title: 'Tài liệu',
          type: SideBarType.document,
        },
      },
      {
        path: 'message',
        loadChildren: async () =>
          (await import('@taga-now/taga-now/message/feature/shell'))
            .TagaNowMessageFeatureShellModule,
        data: {
          title: 'Tin nhắn',
          type: SideBarType.message,
        },
      },
      {
        path: 'users',
        loadChildren: async () =>
          (await import('@taga-now/taga-now/user/feature/shell'))
            .TagaNowUserFeatureShellModule,
        data: {
          title: 'Quản lý user',
        },
      },
    ],
  },
  {
    path: '',
    loadChildren: async () =>
      await (await import('@taga-now/taga-now/auth/feature'))
        .TagaNowAuthFeatureModule,
  },
];
