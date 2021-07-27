import React, { useState, useEffect } from "react";
import { data } from "./data";
const Feild = (props) => {
  const { title, content, info, setInfo } = props;
  const handleClick = (t) => {
    const changed = info.filter((ele) => {
      return ele.title != t;
    });
    setInfo(changed);
    console.log(changed);
  };
  return (
    <>
      <div className='card'>
        <h1>{title}</h1>
        <p>{content}</p>
        <button
          className='btn'
          onClick={() => {
            handleClick(title);
          }}
        >
          remove
        </button>
      </div>
    </>
  );
};

export default Feild;
