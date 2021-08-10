import { combineReducers } from "redux";
import { palceReducer, placeDataReducer, toggleThemeReducer } from "./index";

export const rootReducer = combineReducers({
  place: palceReducer,
  placeData: placeDataReducer,
  theme: toggleThemeReducer,
});
