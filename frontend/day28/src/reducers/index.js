export const palceReducer = (state = {}, action) => {
  if (action.type === "UPDATE_PLACE") {
    return action.payload;
  }
  return state;
};
export const placeDataReducer = (state = {}, action) => {
  if (action.type === "UPDATE_PLACE_DATA") {
    return action.payload;
  }
  return state;
};
export const toggleThemeReducer = (state = false, action) => {
  if (action.type === "TOGGLE_THEME") {
    console.log("theme reducer");
    return !state;
  }
  return state;
};
