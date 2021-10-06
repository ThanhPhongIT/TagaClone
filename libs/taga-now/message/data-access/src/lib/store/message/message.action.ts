import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { MessageChat, MessageChatCreate } from '../../models';

export const loadMessages = createAction('[Message Page/API]');

export const loadMessagesSuccess = createAction(
  '[Message Page/API success]',
  props<{
    messages: MessageChat[];
  }>()
);

export const setMessage = createAction(
  '[Message Page/API success] Set Message',
  props<{ message: MessageChatCreate }>()
);

export const updateMessage = createAction(
  '[Message Page/API success] Update Message',
  props<{ message:Update<MessageChat>}>()
);

export const loadMessagesError = createAction(
  '[Message Page/API error]',
  props<{ error: string }>()
);
