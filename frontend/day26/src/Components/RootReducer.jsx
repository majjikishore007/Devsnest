import { combineReducers } from "redux";
import { incrimentReducer } from "./Reducers";

export const rootReducer = combineReducers({
  incrimentReducer: incrimentReducer,
});
