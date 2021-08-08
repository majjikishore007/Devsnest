import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementAction,
  incrementAction,
  handleName,
  handleEmail,
  handlePassword,
} from "./Components/Actions";
const App = () => {
  const [value, setValues] = useState({
    name1: "",
    email2: "",
    password3: "",
  });
  const { name1, email2, password3 } = value;
  const { name, email, password, count } = useSelector(
    (state) => state.incrimentReducer
  );
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <input
        type='text'
        placeholder='name'
        value={name1}
        onChange={(e) => {
          setValues({ ...value, name1: e.target.value });
          dispatch({ type: "HANDLE_NAME", name1 });
        }}
      />
      <input
        type='password'
        placeholder='password'
        value={password3}
        onChange={(e) => {
          setValues({ ...value, password3: e.target.value });
          dispatch({ type: "HANDLE_PASSWORD", password3 });
        }}
      />
      <input
        type='email'
        placeholder='email'
        value={email2}
        onChange={(e) => {
          setValues({ ...value, email2: e.target.value });
          dispatch({ type: "HANDLE_EMAIL", email2 });
        }}
      />

      <div>
        <h1>Name:{name}</h1>
        <h2>Email:{email}</h2>
        <h3>Password:{password}</h3>
      </div>
      <h1>Counter {count}</h1>
      <div className='container'>
        <button
          onClick={() => {
            dispatch(incrementAction());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrementAction());
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default App;
