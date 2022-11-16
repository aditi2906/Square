import { combineReducers } from "redux";

import authReducer from "./AuthReducer";
import postReducer from "./postReducers";
export const reducers = combineReducers({
  authReducer,
  postReducer
});
