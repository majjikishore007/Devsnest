import React, { useState, useEffect, useContext } from "react";
import Movie from "./Movie";
import Nav from "./Nav";
import { MovieProvider, MovieContext } from "./MovieContext";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {/* {movies.map((movie, index) => (
        <Movie key={index} name={movie.name} rating={movie.rating}></Movie>
      ))} */}
    </div>
  );
};

export default MovieList;
