/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Routes } from '@angular/router';
import { AuthLayoutComponent } from '@taga-now/taga-now/auth/ui/layout';
import { LoginComponent } from '@taga-now/taga-now/auth/ui/login';
import { RegisterComponent } from '@taga-now/taga-now/auth/ui/register';
import { ForgotPasswordComponent } from './../../../ui/forgot-password/src/lib/forgot-password/forgot-password.component';
import { LoginGuard } from './login.guard';

export const authRoutes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'log-in',
        component: LoginComponent,
        canActivate: [LoginGuard],
        data: {
          title: 'Đăng nhập',
        },
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [LoginGuard],
        data: {
          title: 'Đăng ký',
        },
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        canActivate: [LoginGuard],
        data: {
          title: 'Quên mật khẩu',
        },
      }
    ],
  },
];
