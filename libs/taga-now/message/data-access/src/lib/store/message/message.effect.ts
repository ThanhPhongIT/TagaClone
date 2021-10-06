import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { catchError, concatMap, map, mergeMap, tap } from 'rxjs/operators';
import { MessageService } from '../../api';
import { MessageChat } from '../../models/message.model';
import {
  loadMessages,
  loadMessagesSuccess,
  setMessage,
  updateMessage,
} from './message.action';

@Injectable({ providedIn: 'root' })
export class MessageEffect {
  loadMessages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMessages),
      mergeMap(() =>
        this.mesageApi.list().pipe(
          map((messages) =>
            loadMessagesSuccess({
              messages: (messages.payload as unknown) as MessageChat[],
            })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  // setMessages$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(setMessage),
  //       concatMap((action) => this.mesageApi.create(action.company)),
  //       tap(() => this.store.dispatch(loadMessages()))
  //     ),
  //   { dispatch: false }
  // );
  // updateMessages$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(updateMessage),
  //       concatMap((acticon) => {
  //         console.log(acticon);

  //         return this.mesageApi.updateMessage(
  //           acticon.company.changes,
  //           acticon.company.id
  //         );
  //       }),
  //       tap(() => this.store.dispatch(loadMessages()))
  //     ),
  //   { dispatch: false }
  // );

  constructor(
    private store: Store,
    private actions$: Actions,
    private mesageApi: MessageService
  ) {}
}
