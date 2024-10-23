import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ imdbID, Poster, Title }) => {
    return (
        <div className="col-md-3 my-2" key={imdbID}>
            <Link className='text-decoration-none' to={"movie/" + imdbID}>
                <div className="card h-100 d-flex flex-column">
                    <div style={{ width: "100%", height: "300px", overflow: "hidden" }}>
                        <img
                            src={Poster}
                            className="card-img-top w-100 h-100 object-fit-fill"
                            alt="Movie Poster"
                        />
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                        <h5 className="card-title text-center">{Title}</h5>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard