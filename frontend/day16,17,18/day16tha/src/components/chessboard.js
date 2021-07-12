import React from "react";
import Chessbox from "./chessbox";
const chessboard = () => {
  const list = [0, 1, 2, 3, 4, 5, 6, 7];
  const Row1 = () => {
    return (
      <div className='row1'>
        {list.map((element) => {
          return <Chessbox name={"box1"}></Chessbox>;
        })}
      </div>
    );
  };
  const Row2 = () => {
    return (
      <div className='row2'>
        {list.map((element) => {
          return <Chessbox name={"box2"}></Chessbox>;
        })}
      </div>
    );
  };
  return (
    <div>
      {list.map((element) => {
        return element % 2 == 0 ? <Row1 /> : <Row2 />;
      })}
    </div>
  );
};

export default chessboard;
