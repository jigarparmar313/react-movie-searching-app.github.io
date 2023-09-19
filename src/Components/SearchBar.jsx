import React from "react";
import "../App.css"

const SearchBar = ({searchMovie, setSearchMovie,fetchMovieData}) => {
  return (
    <div>
      <div className="container">
        <div className="d-flex flex-col justify-content-center align-items-center ">
          <div className="" style={{ marginTop: "50px" }}>
            <div className="input-group mb-3">
              <input
               value={searchMovie}
               onChange={(e)=> setSearchMovie(e.target.value)}
                className="form-control"
                placeholder="Search here..."
              />
              <button
                className="btn1 btn btn-warning  input-group-text"
                onClick={fetchMovieData}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
