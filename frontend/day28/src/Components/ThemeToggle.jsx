import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Actions";
const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div className='toggle-theme'>
      <div
        className={theme ? "btn btn-light" : "btn btn-dark"}
        onClick={() => {
          dispatch(toggleTheme());
        }}
      >
        {theme ? "Dark" : "Light"}
      </div>
    </div>
  );
};

export default ThemeToggle;
