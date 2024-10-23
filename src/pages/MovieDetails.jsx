import React from 'react'
import { BASEURL } from '../constant'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
export const loader = async ({ params }) => {
  console.log(params.id)
  try {
    const endpoint = `${BASEURL}&i=${params.id}`
    console.log(endpoint)
    const response = await axios.get(endpoint);
    return { details: response.data, error: "", isError: false };
  } catch (error) {
    console.log(error)
    return { details: null, error: error.message, isError: true };
  }
}
const MovieDetails = () => {
  const { details, error, isError } = useLoaderData();
  if (isError) {
    return <h1>{error}</h1>
  }

  if (details && details.Response === "False") {
    return <h1>{details.Error || "No Result Found"}</h1>
  }

  return (
    <div className="container my-5">
      <div className="row">
        {/* Movie Poster */}
        <div className="col-md-4">
          <img
            src={details.Poster}
            alt={details.Title}
            className="img-fluid rounded shadow-sm"
          />
        </div>

        {/* Movie Information */}
        <div className="col-md-8">
          <h1 className="mb-3">{details.Title}</h1>
          <p>
            <strong>Released:</strong> {details.Released} | <strong>Runtime:</strong> {details.Runtime}
          </p>
          <p><strong>Genre:</strong> {details.Genre}</p>
          <p><strong>Director:</strong> {details.Director}</p>
          <p><strong>Writer:</strong> {details.Writer}</p>
          <p><strong>Actors:</strong> {details.Actors}</p>
          <p><strong>Plot:</strong> {details.Plot}</p>

          <div className="my-3">
            <h5>Awards</h5>
            <p>{details.Awards}</p>
          </div>

          <div className="my-3">
            <h5>Box Office</h5>
            <p><strong>Revenue:</strong> {details.BoxOffice}</p>
          </div>

          {/* Ratings */}
          <h5>Ratings</h5>
          <ul className="list-group">
            {details.Ratings.map((rating, index) => (
              <li key={index} className="list-group-item">
                <strong>{rating.Source}:</strong> {rating.Value}
              </li>
            ))}
          </ul>

          {/* IMDb Information */}
          <div className="mt-3">
            <p>
              <strong>IMDb Rating:</strong> {details.imdbRating}
              <br />
              <strong>Votes:</strong> {details.imdbVotes}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;