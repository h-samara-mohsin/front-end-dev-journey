import { INCREAMENT, DECREAMENT, RESET } from "../actions/counterActions";

const initialState = {
  value: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREAMENT:
      return { ...state, value: state.value + 1 };
    case DECREAMENT:
      return { ...state, value: state.value - 1 };
    case RESET:
      return { ...state, value: 0 };
    default:
      return state;
  }
};
