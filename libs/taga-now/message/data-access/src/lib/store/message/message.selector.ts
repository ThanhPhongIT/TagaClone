import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  messagesFeatureKey,
  MessagesState,
  selectAll,
  selectIds
} from './message.reducer';

export const getMessagesState = createFeatureSelector<MessagesState>(
  messagesFeatureKey
);

export const getMessages = createSelector(getMessagesState, selectAll);
export const getCompanyById = createSelector(getMessagesState, selectIds);
export const getMessagesLoading = createSelector(
  getMessagesState,
  (state: MessagesState) => state
);
