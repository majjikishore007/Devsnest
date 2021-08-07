import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div
      className='navbar'
      style={{
        width: "100%",
        background: "blue",
        position: "sticky",
        top: 0,
        marginTop: "0",
        padding: "2em",
      }}
    >
      <h1 style={{ color: "white" }}>movies list :{movies.length}</h1>
    </div>
  );
};

export default Nav;
