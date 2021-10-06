import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getDeepestChildSnapshot } from '@consult-indochina/auth';
import { ComponentStore } from '@ngrx/component-store';
export interface SideBarState {
  type: SideBarType;
  sideBarItems: Record<string, unknown>[];
}
export enum SideBarType {
  document = 'document',
  friends = 'friends',
  user = 'user',
  message = 'message',
  task = 'task',
  company = 'company',
  home = '',
}
@Injectable({ providedIn: 'root' })
export class SideBarStore extends ComponentStore<SideBarState> {
  constructor(public route: ActivatedRoute, public router: Router) {
    super({
      type: getDeepestChildSnapshot(route.root.snapshot).data.type,
      sideBarItems: [],
    });
  }

  readonly sideBarType$ = this.select(({ type }) => type);
  readonly sideBarItems$ = this.select(({ sideBarItems }) => sideBarItems);
}
