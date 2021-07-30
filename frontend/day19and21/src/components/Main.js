import React, { useState, useEffect } from "react";
import CalorieMantainer from "./CalorieMantainer";
import Element from "./Element";
const Main = () => {
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    setItems([...items, item]);
  };
  const updateItem = (index, newItem) => {
    setItems(
      items.map((item, i) => (i === index ? { ...items, ...newItem } : item))
    );
  };
  const deleteItem = (index, item) => {
    setItems(items.filter((item, i) => i !== index));
  };
  return (
    <>
      <div>
        <CalorieMantainer addItem={addItem} />
        {items.map((item, index) => (
          <Element
            item={item}
            key={index}
            index={index}
            updateItem={updateItem}
            deleteItem={deleteItem}
          ></Element>
        ))}
      </div>
    </>
  );
};

export default Main;
