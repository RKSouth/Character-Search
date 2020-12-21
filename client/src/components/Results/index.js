import React from "react";

// Results components for the search results of the user
function Results(props) {

  const books = props.data
  console.log("books search: ", books);

  return (
    <>
    {/* mapping through each book data and then displaying the info from the API and if there are no results, display the mo matching results container */}
      {books !== undefined ? (
        books.map((book, i) => {
          // console.log(book.volumeInfo.authors.length)

          return (
            <div key={book.id + i} className="container" id="Results">
              <div className="card-results">
              <h3>Your Search Results</h3>
                

                <div className="row mb-4 mt-3">
                  <div className="col-lg-4 bookImg">
                    {/* if there are no images of the books, set a defauly logo */}
                    {book.volumeInfo.imageLinks ? (
                      <img
                        className="img-fluid"
                        src={book.volumeInfo.imageLinks.thumbnail}
                        alt={book.volumeInfo.title}
                      />
                    ) : (
                      <img
                        src="./googlebookslogo.png"
                        alt="title"
                        className="img-fluid logo2"
                      />
                    )}
                  </div>
                  <div className="col-lg-8 mainContent">
                    <h2>{book.volumeInfo.title}</h2>
                    {/* if there are more than x number of authors, join with an "&" */}
                    <p>
                      {book.volumeInfo.authors !== undefined
                        ? book.volumeInfo.authors.join(" & ")
                        : book.volumeInfo.authors}
                    </p>
                    <p className="mr-4">{book.volumeInfo.description}</p>
                    <a
                      className="btn btn-outline-light my-2 my-sm-0"
                      target="_blank"
                      rel="noreferrer"
                      href={book.volumeInfo.infoLink}
                    >
                      View
                    </a>
                    <button
                      className="btn btn-outline-light my-2 my-sm-0" 
                      onClick={() => {
                        props.saveBook(book);
                      }}
                    >
                      Save Book
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