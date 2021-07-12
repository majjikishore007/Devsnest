import React from "react";
import "./styles.css";

const card = ({ title, content }) => {
  return (
    <div className='card'>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default card;
