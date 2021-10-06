import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { NavBarItems } from '@taga-now/shared/data-access/models';
interface NavBarState {
  navBarItems: NavBarItems[];
}

@Injectable({ providedIn: 'root' })
export class NavBarStore extends ComponentStore<NavBarState> {
  constructor() {
    super({
      navBarItems: [
        { label: 'Trang chủ', icon: 'home', path: '', exact: true },
        { label: 'Tổ chức', icon: 'company', path: '/company', exact: true },
        { label: 'Bạn bè', icon: 'friends', path: '/friends', exact: true },
        { label: 'Tin nhắn', icon: 'message', path: '/message', exact: true },
        { label: 'Tài liệu', icon: 'document', path: '/document', exact: true },
        { label: 'Công việc', icon: 'package', path: '/tasks', exact: true },
      ],
    });
  }
  readonly navBarItems$ = this.select(({ navBarItems }) => navBarItems);
}
