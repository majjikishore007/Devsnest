import React, { useState, useEffect, useCallback } from "react";
// custom hook
const useWindowWidth = () => {
  const [width, setwidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const handleResize = () => {
    setwidth(window.innerWidth);
  };
  return width;
};
// value setvalue clear removeByid removeindex
const useArray = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    setValue,
    add: useCallback((a) => setValue((v) => [...v, a])),
    clear: useCallback((a) => setValue(() => [])),
  };
};

const Demo = () => {
  const width = useWindowWidth();
  const [state, setState] = useState("");
  const todos = useArray(["hello ", "hi", "how are you"]);
  return (
    <div>
      <div
        className='container'
        style={{
          width: "min(80%, 60em)",
          margin: "auto",
          border: "1px solid black",
        }}
      >
        <h1>{todos.value}</h1>

        <input
          type='text'
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
        />
        <button
          className='button'
          onClick={() => {
            todos.add(state);
            setState("");
          }}
        >
          add
        </button>
        <button
          className='button'
          onClick={() => {
            todos.clear();
          }}
        >
          clear
        </button>
        <h2>{width}</h2>
      </div>
    </div>
  );
};

export default Demo;
