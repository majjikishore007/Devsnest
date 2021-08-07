import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Routes from "./Routes";

import MovieList from "./Context/MovieList";

// import { createStore } from "redux";

// //  (components are called perople) dispatch protests

// //Action  laws they return a object
// const incrementAction = () => {
//   return {
//     type: "INCREMENT",
//   };
// };

// const decrementAction = () => {
//   return {
//     type: "DECREMENT ",
//   };
// };

// // reducer ministers
// const counterReducer = (state = 0, action) => {
//   const { type } = action;
//   switch (type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;

//     default:
//       return state;
//   }
// };
// // store..global store parliment
// const store = createStore(counterReducer);
// store.subscribe(() => {
//   console.log(store.getState());
// });
// store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(incrementAction());

// console.log("store", store.subscribe);
ReactDOM.render(<Routes />, document.getElementById("root"));
