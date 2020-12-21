import React from "react";

// Searchbar component for our search page where the user can type in the input field
export function SearchBar(props) {
  return (
    <div>
    <h1>Search For a Character!</h1>
   <div className="card-center">
   <h3>Begin your search!</h3>
   <div>
       <form className="form-inline my-2 my-lg-0" >
           <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={props.handleSearchChange}/>
               <button className="btn btn-outline-dark my-2 my-sm-0" type="submit"    onClick={props.searchBooks}>Search</button>
               </form >
               <a className="nav-link" href="#Results">Results</a>
               </div>
</div>

</div>
  );
};

export default SearchBar;