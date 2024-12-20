import { ACTIONS_TYPES } from "./actions";
import { Message } from "./types";
import { initialState } from "./initialState";

export function chatReducer(
  state = initialState,
  action: { type: string; payload: string },
) {
  switch (action.type) {
    case ACTIONS_TYPES.FETCH_MESSAGES_REQUEST:
      return { ...state, loading: true, error: null };
    case ACTIONS_TYPES.FETCH_MESSAGES_SUCCESS:
      return { ...state, loading: false, messages: action.payload };
    case ACTIONS_TYPES.FETCH_MESSAGES_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case ACTIONS_TYPES.FETCH_MESSAGE_REQUEST:
      return { ...state, loading: true, error: null };
    case ACTIONS_TYPES.FETCH_MESSAGE_SUCCESS:
      return { ...state, loading: false, message: action.payload };
    case ACTIONS_TYPES.FETCH_MESSAGE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case ACTIONS_TYPES.SEND_MESSAGE_REQUEST:
      return { ...state, loading: true, error: null };
    case ACTIONS_TYPES.SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: [...state.messages, action.payload],
      };
    case ACTIONS_TYPES.SEND_MESSAGE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case ACTIONS_TYPES.FETCH_USERS_REQUEST:
      return { ...state, loading: true, error: null };
    case ACTIONS_TYPES.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case ACTIONS_TYPES.FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case ACTIONS_TYPES.SEARCH_MESSAGES: {
      const query = action.payload.toLowerCase();
      const searchedMessages = state.messages.filter((message: Message) =>
        message.text.toLowerCase().includes(query),
      );
      return { ...state, searchedMessages };
    }

    default:
      return state;
  }
}
