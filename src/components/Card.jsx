import { useState } from "react";

const Card = ({ movie }) => {
  const [isExpanded, setisExpanded] = useState(false);

  const description = movie?.description;
  const displayText = isExpanded
    ? movie?.description
    : description?.slice(0, 90);

  const toggleText = () => {
    setisExpanded(!isExpanded);
  };

  return (
    <div className="card mx-auto my-3 shadow" style={{ width: "18rem",height:"30rem" }}>
      <div style={{ height: "20rem", overflow: "hidden" }}>
        <img
          src={movie?.image}
          className="card-img-top w-100 h-100 object-fit-fill"
          alt={movie?.movieName || "Movie Poster"}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{movie?.movieName}</h5>
        <p className="card-text">
          {/* {movie.description} */}
          {displayText}
          <span
            onClick={toggleText}
            style={{ cursor: "pointer" }}
            className="text-decoration-underline cursor-pointer"
          >
            {isExpanded ? "...see Less" : "...see more"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
