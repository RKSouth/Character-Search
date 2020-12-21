import React from "react";


// SavedBooks component is the main container of displaying the books the user saved
function SavedBooks({ books, deleteBooks }) {
  return (
    // mapping through each book from the database and displaying each book"
    books.map(book => {
      return (
        <div key={book.id} className="container">
          <div className="card">
            <div className="row mb-4 mt-3">
              <div className="col-lg-4 bookImg">
                {book.image ? <img src={book.image} alt="title" className="img-fluid" />
                  : <img src="https://via.placeholder.com/140x100" alt="title" className="img-fluid" />}
              </div>
              <div className="col-lg-8 savedContent">
                <h2>{book.title}</h2>
                <p>{book.author.join(' & ')}</p>
                <p className="mr-4">{book.description}</p>
                <a className="btn btn-outline-light my-2 my-sm-0" target="_blank" rel="noreferrer" href={book.link}>View</a>
                <button onClick={() => deleteBooks(book._id)} className="btn btn-outline-light my-2 my-sm-0">Remove</button> 
              </div>
            </div>
          </div>
        </div>
      );
    })
  );
};

export default SavedBooks;