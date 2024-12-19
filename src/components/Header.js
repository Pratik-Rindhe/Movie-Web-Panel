import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    setSearch(e.target.value); 
  };

  // Handle button click
  const handleSearchClick = () => {
    onSearch(search); 
  };

  return (
    <>
      <div className="container">
        <div className="navbar">
          <h2 className="logo-name">MOVIE<span>DB</span></h2>
          <div className="nav-items">
            <ul className="nav-items">
              <li className="items">
                <Link to="/" className="items">
                  <h3>Popular</h3>
                </Link>
              </li>
              <li className="items">
                <Link to="/top-rated" className="items">
                  <h3>Top Rated</h3>
                </Link>
              </li>
              <li className="items">
                <Link to="/upcoming" className="items">
                  <h3>Upcoming</h3>
                </Link>
              </li>
            </ul>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search for Movies"
                name="search"
                className="input-field"
                value={search}
                onChange={handleInputChange} 
              />
              <button type="button" className="search-button" onClick={handleSearchClick}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
