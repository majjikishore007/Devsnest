import React, { useState, createContext } from "react";

export const MovieContext = createContext();
console.log(MovieContext);
export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "srk",
      rating: 10,
    },
    {
      name: "RRR",
      rating: 5,
    },
    {
      name: "jathiratanalu",
      rating: 8,
    },
    {
      name: "Bhaubali",
      rating: 7,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
