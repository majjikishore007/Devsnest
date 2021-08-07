import React, { useState, useEffect } from "react";
import people from "./data.js";
const Slider = () => {
  const [data, setData] = useState(people);
  return (
    <div>
      {data.map((d, index) => (
        <div className='container' key={index}>
          <img src={d.image} alt='' />
          <h1 style={{ color: "black" }}>{d.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Slider;
