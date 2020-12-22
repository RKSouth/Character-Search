import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar"
import SearchBar from "../components/SearchBar"
import Results from "../components/Results"
import API from '../utils/API'
import Jumbotron from "../components/Jumbotron";
import Attacks from "../attacks.json"



// Search page that allows the user to search for characters
function Search() {
    // variables for the character the user is searching for
    const [searchState, setSearchState] = useState("");
    const [characters, setCharacters] = useState([]);



    // variables for the modal that will pop up when the user clicks on the save character button
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
                    console.log('current id: '+ res.data[i].id);
                    console.log('current character id: ' + Attacks[i].CharacterId)
               
                    // var attack = [];
                    // //if the data id matches the character id add the name to the list of attacks?
                    // if (res.data[i].id === Attacks[i].CharacterId) {
                    //  attack.push(Attacks[i].name);
                    //  console.log(attack)
                    //  console.log(Attacks[i].name)
                    // } else {
                    //     console.log(attack)
                    // }
                }
                console.log("save character response: ", res.data.name)
            })
        console.log("temp: ", temp);
        setIds(temp);
    };
console.log(Attacks)
    // function that allows books to be saved qne displaying the modal
    const saveChar = (char) => {
        console.log("savechar: ", char);
        var img;
        if (char.image === undefined) {
            img = "./Images-char/Wess.png"
        } else {
            img = char.image
        };

        // console.log("char id: ", char.id);
        if (!ids.includes(char.id)) {
            setIds([...ids, char.id]);
            setModalClass("modal showModal");
            setText(char.name + " was saved!");
        } else {
            setModalClass("modal showModal");
            setText(char.name + " is already saved!");
        };
        var attack;
       if (char.id === Attacks.CharacterId) {
        attack.push(Attacks.name);
        
       } else {
           console.log(attack)
       }

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