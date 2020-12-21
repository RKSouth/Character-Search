import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import SavedBooks from "../components/SavedBooks";

// Saved page displaying the books that are in the database
function Saved() {
    const [books, setBooks] = useState([]);
    const [characters, setCharacters] = useState([])
 
  
    // delete books by id
    const deleteCharacters = (id) => {
        // console.log(books);
        // console.log("working");
        // console.log(id);
        API.deleteCharacter(id)
            .then((res) => {
                // console.log(res);
                // then update books
                API.getCharacters()
                    .then(response => {
                        // console.log("delete grab response: ", response);
                        setCharacters(response.data)
                    })
            })

    };

    // grabbing the books from the database on initial render
    useEffect(() => {
        API.getCharacters()
            .then(res => setCharacters(res.data))
        // console.log(books)
    }, []);

    // re-render page when books is updated
    useEffect(() => {
    }, [characters]);

 

    return (
        <div className="mb-5">
            <React.Fragment>
                <Navbar />
                <Jumbotron />
     
                <SavedBooks
                    characters={characters}
                    deleteCharacters={deleteCharacters} style={{ height: 650, clear: "both", paddingTop: 120, textAlign: "center", marginTop: 108 }}/>
               
            </React.Fragment>
        </div>
    );
};

export default Saved;