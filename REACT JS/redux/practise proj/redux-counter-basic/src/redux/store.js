import { createStore, combineReducers } from "redux";
import { counterReducer } from "./reducers/counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS__ && window.__REDUX_DETOOLS_EXTENSION__()
);

export default store;
