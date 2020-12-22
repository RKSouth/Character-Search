import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar"
import SearchBar from "../components/SearchBar"
import Results from "../components/Results"
import API from '../utils/API'
import Jumbotron from "../components/Jumbotron";



// Search page that allows the user to search for books
function Search() {
    // variables for the book the user is searching for
    const [searchState, setSearchState] = useState("");
    const [characters, setCharacters] = useState([]);


    // variables for the modal that will pop up when the user clicks on the save book button
    const [modalClass, setModalClass] = useState("modal hideModal");
    const [text, setText] = useState("Saved!");
    // saved book ids
    const [ids, setIds] = useState([]);

    // for the modal display to hide or show
    useEffect(() => {
    }, [modalClass]);

    function modalClose() {
        setModalClass("modal hideModal");
    };

    // function for the user's input that tracks every letter typed in by the user
    const handleSearchChange = (e) => {
        const { value } = e.target
        setSearchState(value)
        // console.log(searchState)
    };

    // function that is grabbing the information from the google books API
    const searchCharacters = async () => {
        let temp = [];
        temp.length = 0;
        let newCharacters = await API.getCharacters(searchState)
            .then((res) => {
                return res.data;
            });
        setCharacters(newCharacters);
        // grab saved books whenever a new search occurs
        API.getCharacters()
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    temp.push(res.data[i].id);
                }
                console.log("save character response: ", res.data.name)
            })
        console.log("temp: ", temp);
        setIds(temp);
    };

    // function that allows books to be saved qne displaying the modal
    const saveChar = (char) => {
        console.log("savechar: ", char);
        var img;
        if (char.image === undefined) {
            img = "./Images-char/Wess.png"
        } else {
            img = char.image
        };

        // console.log("book id: ", book.id);
        if (!ids.includes(char.id)) {
            setIds([...ids, char.id]);
            setModalClass("modal showModal");
            setText(char.name + " was saved!");
        } else {
            setModalClass("modal showModal");
            setText(char.name + " is already saved!");
        };

        // setting an object with the data we grabbed from the axios call and passing in the data to be saved into the database
        const data = {
            name: char.name,
            attack: char.attack,
            image: img,
            id: char.id
        };

        API.addCharacter(data).then(res => {
            console.log("saved", res)


        }).then(err => {
            console.log("error", err);

        });
    };

 


    return (
        <div className="mb-5">
            <Navbar />
            <Jumbotron />
     
            <SearchBar
                handleSearchChange={handleSearchChange}
                searchCharacters={searchCharacters} />
               
            <Results
                data={characters}
                saveChar={saveChar}
                modalClose={modalClose}
                text={text}
                modalClass={modalClass}
            />
        </div>
    );
};

export default Search;