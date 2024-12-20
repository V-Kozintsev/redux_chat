// types.ts
export interface Message {
  id: string;
  text: string;
  senderId: string;
}
export interface User {
  id: string;
  name: string;
}

export interface AppState {
  messages: Message[];
  users: User[]; // Исправлено на массив пользователей
  searchedMessages: Message[];
  loading: boolean;
  error: string | null;
}
