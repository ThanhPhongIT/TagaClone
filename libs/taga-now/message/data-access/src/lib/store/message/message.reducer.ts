import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { MessageChat } from '../../models';
import {
  loadMessages,
  loadMessagesSuccess,
  setMessage,
  updateMessage,
} from './message.action';
// eslint-disable-next-line

export interface MessagesState extends EntityState<MessageChat> {
  data: MessageChat;
  status: 'success';
  error: null;
  messagesLoaded: boolean;
}

export const messagesFeatureKey = 'messages';

export const adapter: EntityAdapter<Partial<MessageChat>> = createEntityAdapter<Partial<MessageChat>>({
  selectId: (messages) => messages.RecipientUserProfileId || -1,
});

export const initialState = adapter.getInitialState({
  status: 'success',
  error: null,
  messagesLoaded: false,
});

export const messagesReducer = createReducer(
  initialState,
  on(loadMessages, (state) => ({
    ...state,
    status: 'loading',
    error: null,
  })),
  on(loadMessagesSuccess, (state, action) => {
    return adapter.setAll(action.messages, {
      ...state,
      status: 'success',
      error: null,
      messagesLoaded: true,
    });
  }),

  on(setMessage, (state, { message }) => {
    return adapter.addOne(message, state);
  }),
  on(updateMessage, (state, { message }) => {
    return adapter.updateOne(message, state);
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();
