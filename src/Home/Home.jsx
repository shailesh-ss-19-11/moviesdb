import React, { useEffect, useMemo, useState } from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";
const Home = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPageItems, setPerPageItems] = useState(8);
  const searchInput = useSelector((state) => state?.searchInput?.inputValue);
  // Fetch movies from API
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:8000/movies");
        const data = await response.json();
        setMoviesData(data || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  // Filtered Data based on search input
  const filteredData = useMemo(() => {
    if (!searchInput.trim()) return moviesData;
    return moviesData.filter((movie) =>
      movie.movieName?.toLowerCase().includes(searchInput.toLowerCase())
    );
  }, [searchInput, moviesData]);

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / perPageItems);
  const startIndex = (currentPage - 1) * perPageItems;
  const renderItems = filteredData.slice(startIndex, startIndex + perPageItems);

  return (
    <div className="row mt-3 justify-content-center">
      {renderItems.length > 0 ? (
        renderItems.map((movie) => (
          <div className="col-auto" key={movie.id || movie.movieName}>
            <Card movie={movie} />
          </div>
        ))
      ) : (
        <p>No movies found</p>
      )}

      {/* Pagination Controls */}
      <div className="d-flex justify-content-center align-items-center gap-2 mt-3 flex-wrap">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`btn btn-md ${
              currentPage === index + 1 ? "btn-primary" : "btn-outline-primary"
            } border`}
          >
            {index + 1}
          </button>
        ))}

        <select
          className="form-select w-auto"
          value={perPageItems}
          onChange={(e) => {
            setPerPageItems(Number(e.target.value));
            setCurrentPage(1); // Reset to first page
          }}
        >
          {[5, 8, 10, 20, 30, 50].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Home;
