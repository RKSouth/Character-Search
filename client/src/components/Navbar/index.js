
import React from "react";
import { NavLink } from "react-router-dom";


// Navbar component for each page
function Navbar() {
    return (
  
        <div className="row-3">
        <nav className="navbar fixed-top navbar-light bg-light">
      
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <nav className="navbar-brand" ><h1>Character Search</h1></nav>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">
                    <li className="nav-item">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/search" className="nav-link">Search</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/saved" className="nav-link">Saved</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/create" className="nav-link">Create</NavLink>
                        </li>
                    </ul>
                    <div className="px-3"></div>
                    </div>
</nav>
</nav>
</div>
    );
};

export default Navbar;