import React, { useState, useEffect } from "react";

const CalorieMantainer = (props) => {
  const { addItem } = props;
  const [name, setName] = useState("");
  const [calorie, setCalorie] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ name, calorie });
    setName("");
    setCalorie("");
    // console.log(values);
  };
  return (
    <div>
      <form>
        <input
          type='text'
          placeholder='item name'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type='number'
          placeholder='Calorie amount'
          value={calorie}
          onChange={(e) => {
            setCalorie(e.target.value);
          }}
        />
        <button onClick={handleSubmit} className='btn-add'>
          Add item
        </button>
      </form>
    </div>
  );
};

export default CalorieMantainer;
