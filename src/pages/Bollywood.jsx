import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { searchInput } from "../redux/SearchInputSlice";

const Bollywood = () => {
  const searchInputStr = useSelector((state) => state?.searchInput?.inputValue);
  const [moviesData, setmoviesData] = useState([]);
  const [filterMovies, setfilterMovies] = useState([]);
  const dispatch = useDispatch();

  const fetchBollywoodMovies = async () => {
    try {
      const response = await fetch("http://localhost:8000/bollywood");
      const movieData = await response.json();
      setmoviesData(movieData);
      setfilterMovies(movieData);
    } catch (error) {
      console.log("🚀 ~ fetchBollywoodMovies ~ error:", error);
      setmoviesData([]);
    }
  };

  useEffect(() => {
    fetchBollywoodMovies();
    return function cleanup() {
      dispatch(searchInput(""));
    };
  }, []);

  useEffect(() => {
    if (searchInput != "") {
      console.log("chal rha hai");
      let filterMovies = moviesData.filter((movie) =>
        movie.movieName.toLowerCase().includes(searchInputStr.toLowerCase())
      );
      setfilterMovies(filterMovies);
    }
  }, [searchInputStr]);

  const handleSort = (e) => {
    const sortedMovies = filterMovies.sort((a, b) => {
      if (e.target.value == "asc") {
        if (a.movieName.toLowerCase() < b.movieName.toLowerCase()) {
          return -1;
        }
      } else {
        //desc
        if (a.movieName.toLowerCase() > b.movieName.toLowerCase()) {
          return -1;
        }
      }
    });
    console.log("🚀 ~ sortedMovies ~ sortedMovies:", sortedMovies);
    setfilterMovies(sortedMovies);
  };

  return (
    <>
      <div className="w-100 mt-2 p-2">
        <select
          name=""
          id=""
          onChange={handleSort}
          className="form-control w-25 d-flex justify-content-center"
        >
          <option value=""> Select</option>
          <option value="asc"> Ascending</option>
          <option value="dsc"> Descending</option>
        </select>
      </div>
      <div className="row mt-3 justify-content-center">
        {filterMovies.length > 0 ? (
          filterMovies.map((movie) => (
            <div className="col-auto" key={movie.id || movie.movieName}>
              <Card movie={movie} />
            </div>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </>
  );
};

export default Bollywood;
