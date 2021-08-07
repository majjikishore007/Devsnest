import React, { useState, useEffect } from "react";

const Movie = (props) => {
  const { name, rating } = props;
  console.log(props);
  return (
    <div
      style={{
        width: "min(80%,60rem)",
        marginInline: "auto",
        textAlign: "center",
        padding: "2em",
        background: "pink",
        marginBottom: "2em",
        borderRadius: "3em",
      }}
    >
      <h3 style={{ color: "blue", fontSize: "3.5em" }}>Title: {name}</h3>
      <h3 style={{ color: "red", fontSize: "1.5em" }}>Rating: {rating}*</h3>
    </div>
  );
};

export default Movie;
