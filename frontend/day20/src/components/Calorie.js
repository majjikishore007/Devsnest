import React, { useState, useEffect } from "react";
import { data } from "./data";
import Feild from "./Feild";
const Calorie = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    setInfo(data);
  }, []);
  return (
    <>
      <div className='container'>
        {info.map((item, index) => (
          <Feild
            title={item.title}
            content={item.content}
            info={info}
            setInfo={setInfo}
            key={index}
          ></Feild>
        ))}
      </div>
    </>
  );
};

export default Calorie;
