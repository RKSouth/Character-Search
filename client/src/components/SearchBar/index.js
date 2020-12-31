import React from "react";

// Searchbar component for our search page where the user can type in the input field
export function SearchBar(props) {
  return (
    <div className="container mb-5">
        <input type="text" className="bar form-control text-center" 
        placeholder="What are you looking for?" onChange={props.handleSearchChange} />
      <button className="btn btn-light mt-4" id="searchBtn" onClick={props.searchCharacters}>Search Characters</button>
    </div>
  );
};

export default SearchBar;