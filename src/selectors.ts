// selectors.ts
import { Message, AppState } from "./types";

export const getMessages = (state: AppState): Message[] => state.messages;

export const getMessageById = (
  state: AppState,
  messageId: string,
): Message | undefined => {
  return state.messages.find((message) => message.id === messageId);
};

export const getUsers = (state: AppState) => state.users;

export const getSearchedMessages = (state: AppState): Message[] =>
  state.searchedMessages;

export const getLoadingStatus = (state: AppState): boolean => state.loading;

export const getError = (state: AppState): string | null => state.error;
