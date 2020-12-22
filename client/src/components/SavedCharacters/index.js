import React from "react";


// SavedBooks component is the main container of displaying the books the user saved
function SavedCharacters({ characters, deleteCharacters }) {
  return (
    // mapping through each book from the database and displaying each book"
    characters.map(char => {
      return (
        <div key={char.id} className="container">
          <div className="card">
            <div className="row mb-4 mt-3">
              <div className="col-lg-4 bookImg">
                {char.image ? <img src={char.image} alt="title" className="img-fluid" />
                  : <img src="https://via.placeholder.com/140x100" alt="title" className="img-fluid" />}
              </div>
              <div className="col-lg-8 savedContent">
                <h2>{char.name}</h2>
                
                <button onClick={() => deleteCharacters(char._id)} className="btn btn-outline-light my-2 my-sm-0">Remove</button> 
              </div>
            </div>
          </div>
        </div>
      );
    })
  );
};

export default SavedCharacters;