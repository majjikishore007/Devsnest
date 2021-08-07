import React from "react";
import About from "./About";
import Menu from "./Menu";

const Base = (props) => {
  const { children } = props;
  return (
    <div>
      <Menu></Menu>
      {children}
    </div>
  );
};

export default Base;
