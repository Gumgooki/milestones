import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import milestones from "./milestones";

const reducer = combineReducers({ milestones });

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, createLogger())
);

export default store;
export * from "./milestones";
