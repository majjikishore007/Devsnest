// takes actions and old state and returns modified state
const initialValue = {
  name: "",
  emalil: "",
  password: "",
  count: 0,
};
export const incrimentReducer = (state = initialValue, action) => {
  const { type } = action;
  switch (type) {
    case "INCREMENT":
      console.log("incriment");
      return { ...state, count: ++state.count };
    case "DECREMENT":
      return { ...state, count: --state.count };
    case "HANDLE_NAME":
      console.log("handleName", action.name1);
      return { ...state, name: action.name1 };
    case "HANDLE_EMAIL":
      return { ...state, email: action.email2 };
    case "HANDLE_PASSWORD":
      return { ...state, password: action.password3 };
    default:
      return state;
  }
};
