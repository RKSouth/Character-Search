import React from "react";

// Results components for the search results of the user
function Results(props) {

  const characters = props.data
  // console.log("books search: ", books);

  return (
    <>
    {/* mapping through each book data and then displaying the info from the API and if there are no results, display the mo matching results container */}
      {characters !== undefined ? (
        characters.map((char, i) => {
          // console.log(char)

          return (
            <div key={char.id + i} >
          <div className="card">
            <div className="row mb-4 mt-3">
              <div className="col-lg-4">
                {char.image ? <img src={char.image} alt= {char.name} className="img-fluid" />
                  : <img src="https://via.placeholder.com/140x100" alt="title" className="img-fluid" />}
              </div>
              <div className="col-lg-8 savedContent">
                <h2>{char.name}</h2>
                    {/* if there are more than x number of authors, join with an "&" */}
                      <ul><h4>Attacks:</h4>
                        <li>{char.attack[0]}</li>
                        <li>{char.attack[1]}</li>
                        <li>{char.attack[2]}</li>
                        <li>{char.attack[3]}</li>
                        <li>{char.attack[4]}</li>
                      </ul>
                   
                   <p>{char.text}</p>
                    <button
                      className="ml-3 btn btn-light"
                      onClick={() => {
                        props.saveChar(char);
                      }}
                    >
                      Save Character
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
      {/* modal start */}
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
                className="btn btn-secondary"

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