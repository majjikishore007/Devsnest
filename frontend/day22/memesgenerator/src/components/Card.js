import React from "react";

const Card = (props) => {
  // console.log(props);
  const { img, name, handleClick } = props;
  return (
    <div className='card'>
      <img src={img} alt='' />
      <h2 className='text-center'>{name}</h2>
      <button onClick={handleClick}>Choose</button>
    </div>
  );
};

export default Card;
