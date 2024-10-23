import React from 'react'
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

const MovieList = ({ movieApiResponse }) => {
  console.log(movieApiResponse)
  const { moviesData, isError, error } = movieApiResponse;

  if (isError) {
    return <h1>{error}</h1>
  }


  if (moviesData && moviesData.Response === "False") {
    return <h1>{movieApiResponse.Error || "No Result Found"}</h1>
  }
  return (
    <div className="row">
      {moviesData && moviesData.Search && moviesData.Search.map((movie,index) => <MovieCard key={movie.imdbID} {...movie} />)}
    </div>
  )
}

export default MovieList