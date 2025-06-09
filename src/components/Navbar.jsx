import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchInput } from "../redux/SearchInputSlice";
// state lifting up
// redux toolkit
const Navbar = () => {
  const dispatch = useDispatch();
  const searchInputStr = useSelector((state) => state?.searchInput?.inputValue);

  return (
    <div className="w-100 bg-dark">
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-4">
            <h1 className="text-white">Movies DB</h1>
          </div>
          <div className="col-8">
            <div className="d-flex gap-4 justify-content-center align-items-center">
              <Link to={"/"} className="text-decoration-none">
                <h5 className="text-light m-0">Home</h5>
              </Link>
              <Link to={"/bollywood"} className="text-decoration-none">
                <h5 className="text-light m-0">Bollywood</h5>
              </Link>
              <Link to={"/hollywood"} className="text-decoration-none">
                <h5 className="text-light m-0">Hollywood</h5>
              </Link>
              <Link to={"/web-series"} className="text-decoration-none">
                <h5 className="text-light m-0">Web Series</h5>
              </Link>
              <Link to={"/animation"} className="text-decoration-none">
                <h5 className="text-light m-0">Animation</h5>
              </Link>
              <div className="input-group w-25">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  value={searchInputStr}
                  onChange={(e) => dispatch(searchInput(e.target.value))}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
