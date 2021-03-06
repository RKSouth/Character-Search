import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/index";
import Jumbotron from "../components/Jumbotron/index";
import API from "../utils/API";
import SavedCharacters from "../components/SavedCharacters";

// Saved page displaying the books that are in the database
function Saved() {

    const [characters, setCharacters] = useState([])
 
  
    // delete books by id
    const deleteCharacters = (id) => {
        console.log(characters);
        console.log("working");
        console.log(id);
        API.deleteCharacter(id)
            .then((res) => {
                console.log(res);
                // then update books
                API.getCharacters()
                    .then(response => {
                        console.log("delete grab response: ", response);
                        setCharacters(response.data)
                    })
            })

    };

    // grabbing the books from the database on initial render
    useEffect(() => {
        API.getApiChars()
            .then(res => setCharacters(res.data))
        // console.log(characters)
    }, [characters]);

    // re-render page when books is updated
    useEffect(() => {
    }, [characters]);

 

    return (
        <div>
            <React.Fragment>
                <Navbar />
                <Jumbotron />
                <div className="container">
          <div className="text-center row" >
                <SavedCharacters
                    characters={characters}
                    deleteCharacters={deleteCharacters} style={{ height: 650, clear: "both", paddingTop: 120, textAlign: "center", marginTop: 108 }}/>
                 </div>
        </div>
            </React.Fragment>
        </div>
    );
};

export default Saved;