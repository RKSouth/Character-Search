import React from "react";


// SavedBooks component is the main container of displaying the books the user saved
function SavedCharacters({ characters, deleteCharacters }) {
  return (
    // mapping through each book from the database and displaying each book"
    characters.map(char => {
      return (
       
          <div className="card">
            <div className="row mb-4 mt-3">
              <div className="col-lg-4">
                {char.image ? <img src={char.image} alt= {char.name} className="img-fluid" />
                  : <img src="https://via.placeholder.com/140x100" alt="title" className="img-fluid" />}
              </div>
              <div className="col-lg-8 savedContent">
                <h2>{char.name}</h2>
                <ul><h4>Attacks:</h4>
                        <li>{char.attack[0]}</li>
                        <li>{char.attack[1]}</li>
                        <li>{char.attack[2]}</li>
                        <li>{char.attack[3]}</li>
                        <li>{char.attack[4]}</li>
                      </ul>
                
                <button onClick={() => deleteCharacters(char._id)} className="btn btn-outline-light my-2 my-sm-0">Remove</button> 
              </div>
            </div>
          </div>
     
      );
    })
  );
};

export default SavedCharacters;