// actions.ts
import { Message, User } from "./types";

export const ACTIONS_TYPES = {
  FETCH_MESSAGES_REQUEST: "FETCH_MESSAGES_REQUEST",
  FETCH_MESSAGES_SUCCESS: "FETCH_MESSAGES_SUCCESS",
  FETCH_MESSAGES_FAILURE: "FETCH_MESSAGES_FAILURE",

  FETCH_MESSAGE_REQUEST: "FETCH_MESSAGE_REQUEST",
  FETCH_MESSAGE_SUCCESS: "FETCH_MESSAGE_SUCCESS",
  FETCH_MESSAGE_FAILURE: "FETCH_MESSAGE_FAILURE",

  SEND_MESSAGE_REQUEST: "SEND_MESSAGE_REQUEST",
  SEND_MESSAGE_SUCCESS: "SEND_MESSAGE_SUCCESS",
  SEND_MESSAGE_FAILURE: "SEND_MESSAGE_FAILURE",

  FETCH_USERS_REQUEST: "FETCH_USERS_REQUEST",
  FETCH_USERS_SUCCESS: "FETCH_USERS_SUCCESS",
  FETCH_USERS_FAILURE: "FETCH_USERS_FAILURE",

  SEARCH_MESSAGES: "SEARCH_MESSAGES",
};

// Экшены для получения сообщений
export const fetchMessagesRequest = () => ({
  type: ACTIONS_TYPES.FETCH_MESSAGES_REQUEST,
});
export const fetchMessagesSuccess = (messages: Message[]) => ({
  type: ACTIONS_TYPES.FETCH_MESSAGES_SUCCESS,
  payload: messages,
});
export const fetchMessagesFailure = (error: string) => ({
  type: ACTIONS_TYPES.FETCH_MESSAGES_FAILURE,
  payload: error,
});

// Экшены для получения одного сообщения
export const fetchMessageRequest = () =>
  ({
    type: ACTIONS_TYPES.FETCH_MESSAGE_REQUEST,
  }) as const;
export const fetchMessageSuccess = (message: Message) => ({
  type: ACTIONS_TYPES.FETCH_MESSAGE_SUCCESS,
  payload: message,
});
export const fetchMessageFailure = (error: string) => ({
  type: ACTIONS_TYPES.FETCH_MESSAGE_FAILURE,
  payload: error,
});
// Экшены для отправки сообщения
export const sendMessageRequest = (message: Message) => ({
  type: ACTIONS_TYPES.SEND_MESSAGE_REQUEST,
  payload: { message },
});
export const sendMessageSuccess = (message: Message) => ({
  type: ACTIONS_TYPES.SEND_MESSAGE_SUCCESS,
  payload: message,
});
export const sendMessageFailure = (error: string) => ({
  type: ACTIONS_TYPES.SEND_MESSAGE_FAILURE,
  payload: error,
});
// Экшены для получения списка пользователей
export const fetchUsersRequest = () => ({
  type: ACTIONS_TYPES.FETCH_USERS_REQUEST,
});
export const fetchUsersSuccess = (users: User) => ({
  type: ACTIONS_TYPES.FETCH_USERS_SUCCESS,
  payload: users,
});
export const fetchUsersFailure = (error: string) => ({
  type: ACTIONS_TYPES.FETCH_USERS_FAILURE,
  payload: error,
});
// Поиск в сообщениях
export const searchChat = (query: string) => ({
  type: ACTIONS_TYPES.SEARCH_MESSAGES,
  payload: query,
});
