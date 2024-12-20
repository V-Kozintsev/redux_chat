import { chatReducer } from "../reducer";
import { ACTIONS_TYPES } from "../actions";
import { initialState } from "../initialState"; // Ваш начальный state

describe("chatReducer", () => {
  it("should handle FETCH_MESSAGES_SUCCESS", () => {
    const action = {
      type: ACTIONS_TYPES.FETCH_MESSAGES_SUCCESS,
      payload: [{ id: "1", text: "Hello", senderId: "user1" }],
    };

    const newState = chatReducer(initialState, action);
    expect(newState.messages).toEqual(action.payload);
  });
});
