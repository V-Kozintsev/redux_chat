import "./main.css";
/* import "./main.css";

//Структура состояния (State)
export const initialState = {
  messages: [], // Список всех сообщений
  users: [], // Список пользователей
  loading: false, // Статус загрузки
  error: null, // Ошибки, если они возникают
  selectedMessage: null, // Добавляем выбранное сообщение
  searchResults: [], // Для хранения результатов поиска
};

// Экшены для сообщений
const FETCH_MESSAGES_REQUEST = "FETCH_MESSAGES_REQUEST";
const FETCH_MESSAGES_SUCCESS = "FETCH_MESSAGES_SUCCESS";
const FETCH_MESSAGES_FAILURE = "FETCH_MESSAGES_FAILURE";

const GET_MESSAGE_REQUEST = "GET_MESSAGE_REQUEST";
const GET_MESSAGE_SUCCESS = "GET_MESSAGE_SUCCESS";
const GET_MESSAGE_FAILURE = "GET_MESSAGE_FAILURE";

const SEND_MESSAGE_REQUEST = "SEND_MESSAGE_REQUEST";
const SEND_MESSAGE_SUCCESS = "SEND_MESSAGE_SUCCESS";
const SEND_MESSAGE_FAILURE = "SEND_MESSAGE_FAILURE";

// Экшены для пользователей
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// Экшен для поиска
const SEARCH_MESSAGES = "SEARCH_MESSAGES";

//экшен-креаторы
//извлеч
export const fetchMessagesRequest = () => ({ type: FETCH_MESSAGES_REQUEST });
export const fetchMessagesSuccess = (messages) => ({
  type: FETCH_MESSAGES_SUCCESS,
  payload: messages,
});
export const fetchMessagesFailure = (error) => ({
  type: FETCH_MESSAGES_FAILURE,
  payload: error,
});
//получить сообщения
export const getMessageRequest = (id) => ({ type: GET_MESSAGE_REQUEST, payload: id });
export const getMessageSucces = (message) => ({
  type: GET_MESSAGE_SUCCESS,
  payload: message,
});
export const getMessageFailure = (error) => ({
  type: GET_MESSAGE_FAILURE,
  payload: error,
});
//отправка сообщений
export const sendMessageRequest = (message) => ({
  type: SEND_MESSAGE_REQUEST,
  payload: message,
});
export const sendMessageSucces = (message) => ({
  type: SEND_MESSAGE_SUCCESS,
  payload: message,
});
export const sendMessageFailure = (error) => ({
  type: SEND_MESSAGE_FAILURE,
  payload: error,
});
//пользователи
export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST;
});
export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});
export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});
//поиск
export const searchMessages = (query) => ({
  type: SEARCH_MESSAGES,
  payload: query,
});

//редьюсеры
const chatReduser = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MESSAGES_REQUEST:
      return { ...state, loading: true };
    case FETCH_MESSAGES_SUCCESS:
      return { ...state, loading: false, massages: action.payload };
    case FETCH_MESSAGES_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case GET_MESSAGE_REQUEST:
      return { ...state, loading: true };
    case GET_MESSAGE_SUCCESS:
      return { ...state, loading: false, selectedMessage: action.payload }; // Можно добавить selectedMessage в начальное состояние
    case GET_MESSAGE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case SEND_MESSAGE_REQUEST:
      return { ...state, loading: true };
    case SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: [...state.messages, action.payload],
      }; // Добавляем новое сообщение
    case SEND_MESSAGE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload };

    case FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case SEARCH_MESSAGES:
      return {
        ...state,
        searchResults: state.messages.filter((msg:) =>
          msg.content.includes(action.payload)
        ),
      }; // Поиск по содержимому

    default:
      return state;
  }
};

//селекторы
const selectMessages = (state) => state.messages;
const selectUsers = (state) => state.users;
const selectLoading = (state) => state.loading;
const selectError = (state) => state.error;
const selectSearchResults = (state) => state.searchResults;
 */
