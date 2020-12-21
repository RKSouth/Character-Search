import React from "react";

// Results components for the search results of the user
function Results(props) {

  const characters = props.data
  console.log("characters search: ", characters);

  return (
    <>
    {/* mapping through each char data and then displaying the info from the API and if there are no results, display the mo matching results container */}
      {characters !== undefined ? (
        characters.map((char, i) => {
          // console.log(char.volumeInfo.authors.length)

          return (
            <div key={char.id + i} className="container" id="Results">
              <div className="card-results">
              <h3>Your Search Results</h3>
                

                <div className="row mb-4 mt-3">
                  <div className="col-lg-4 charImg">
                    {/* if there are no images of the characters, set a defauly logo */}
                    {char.image ? (
                      <img
                        className="img-fluid"
                        src={char.image}
                        alt={char.name}
                      />
                    ) : (
                      <img
                        src="./googlecharacterslogo.png"
                        alt="title"
                        className="img-fluid logo2"
                      />
                    )}
                  </div>
                  <div className="col-lg-8 mainContent">
                    <h2>{char.name}</h2>
                    {/* if there are more than x number of authors, join with an "&" */}
            
                
                   
                    <button
                      className="btn btn-outline-light my-2 my-sm-0" 
                      onClick={() => {
                        props.saveChar(char);
                      }}
                    >
                      Save char
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="container mb-5">
          <div className="card result">
            <h2 className="p-5">
              Sorry, we couldn't find any matching results.
            </h2>
          </div>
        </div>
      )}

      <div className={props.modalClass}>
        <div>
          <div >
            <div >
              <button
                type="button"
                className="close"
       
                aria-label="Close"
              ></button>
            </div>
            <div className=" mt-2">
              <p>{props.text}</p>
            
            </div>
            <div className="footer">
              <button
                onClick={() => props.modalClose()}
                type="button"
                className="btn btn-outline-light my-2 my-sm-0" 

              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Results;