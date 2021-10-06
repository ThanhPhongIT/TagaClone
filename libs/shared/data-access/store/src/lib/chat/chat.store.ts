import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { NavBarItems } from '@taga-now/shared/data-access/models';
interface MessageItems {
  messageItems: NavBarItems[];
}

@Injectable({ providedIn: 'root' })
export class ChatStore extends ComponentStore<MessageItems> {
  constructor() {
    super({
      messageItems: [
        { label: 'Home', path: '', exact: true },
        { label: 'Browse', path: '/browse' },
        { label: 'My Playlists', path: '/collection/playlists' },
        { label: 'My Albums', path: '/albums' },
      ],
    });
  }

  readonly messageItems$ = this.select(({ messageItems }) => messageItems);
}
