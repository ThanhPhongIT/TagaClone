import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { filter, switchMapTo, tap } from 'rxjs/operators';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NavBarItems } from '@taga-now/shared/data-access/models';
interface UIState {
  navItems: NavBarItems[];
  isUnauthorizedTimeOut: boolean;
}

@Injectable({ providedIn: 'root' })
export class CommonStore extends ComponentStore<UIState> {
  constructor(private modalService: NzModalService) {
    super({
      navItems: [
        { label: 'Home', path: '', exact: true },
        { label: 'Browse', path: '/browse' },
        { label: 'My Playlists', path: '/collection/playlists' },
        { label: 'My Albums', path: '/albums' },
      ],
      isUnauthorizedTimeOut: false,
    });
  }

  readonly isUnauthorizedTimeOut$ = this.select((s) => s.isUnauthorizedTimeOut);

  readonly navItems$ = this.select(({ navItems }) => navItems);

  readonly showUnauthorizedModal = this.effect((params$) =>
    params$.pipe(
      switchMapTo(this.isUnauthorizedTimeOut$),
      filter((s) => !s),
      tap(() => {
        this.patchState({
          isUnauthorizedTimeOut: true,
        });
        this.modalService.create({
          nzTitle: 'Your access token has expired!',
          //   nzContent: UnauthorizedModalComponent,
          nzClosable: false,
          nzKeyboard: false,
          nzMaskClosable: false,
        });
      })
    )
  );
}
