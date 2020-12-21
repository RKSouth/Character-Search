import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar"
import Results from "../components/Results"
import API from '../utils/booksAPI'




// Search page that allows the user to search for books
function Search() {
    // variables for the book the user is searching for
    const [searchState, setSearchState] = useState("");
    const [books, setBooks] = useState([]);
    const [characters, setCharacters] = useState([])
 

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
    const searchBooks = async () => {
        let temp = [];
        //char
        let temps = [];
        temp.length = 0;
        //char
        temps.length = 0;
        let newBooks = await API.getBooks(searchState)
            .then((res) => {
                return res.data.items;
            });
        //char
        let newChars = await API.getCharacters(searchState)
            .then((res) => {
                return res.data
            })

        setBooks(newBooks);
        //char
        setCharacters(newChars);
        // grab saved books whenever a new search occurs
        API.getApiBooks()
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    temp.push(res.data[i].id);
                }
                console.log("savebook response: ", res)
            })
        console.log("temp: ", temp);
        setIds(temp);

//this is a copy of the getApibooks but getting characters instead
        API.getCharacters()
        .then(res => {
            for (let i = 0; i < res.data.length; i++) {
                temps.push(res.data[i].id);
            }
            console.log("savebook response: ", res)
        })
        console.log("temps: ", temps);
        setIds(temps);
    };

    // function that allows books to be saved qne displaying the modal
    const saveBook = (book) => {
        // console.log("savebook: ", book);
        var image;
        if (book.volumeInfo.imageLinks === undefined) {
            // image = "./googlebookslogo.png"
        } else {
            image = book.volumeInfo.imageLinks.thumbnail
        };

        // console.log("book id: ", book.id);
        if (!ids.includes(book.id)) {
            setIds([...ids, book.id]);
            setText(book.volumeInfo.title + " was saved!");
        } else {
            setText(book.volumeInfo.title + " is already saved!");
        };

        // setting an object with the data we grabbed from the axios call and passing in the data to be saved into the database
        const data = {
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: image,
            link: book.volumeInfo.infoLink,
            id: book.id
        };

        API.addBook(data).then(res => {
            console.log("saved", res)


        }).then(err => {
            console.log("error", err);

        });
    };

     // function that allows books to be saved qne displaying the modal
     const saveChar = (char) => {
        console.log(char)
        var image;
        if (char.image === undefined) {
            image = "Images-char/Wess.png"
        } else {
            image = char.image
        };

        console.log("char id: ", char.id);
        if (!ids.includes(char.id)) {
            setIds([...ids, char.id]);
            setText(char.name + " was saved!");
        } else {
            setText(char.name + " is already saved!");
        };

        // setting an object with the data we grabbed from the axios call and passing in the data to be saved into the database
        const data = {
            name: char.name,
            attack: char.attack,
            image:char.image,
            id: char.id
        };

        API.addCharacter(data).then(res => {
            console.log("saved", res)


        }).then(err => {
            console.log("error", err);

        });
    };


    return (
      <div>
      <div
      style={{ height: 650, clear: "both", paddingTop: 120, textAlign: "center", marginTop: 138 }}
      className="jumbotron" id ="Search"
   >
          <div>
             <SearchBar
                handleSearchChange={handleSearchChange}
                searchBooks={searchBooks}
                
                 />
               

               </div>
        
     
        </div>
            <Results
                // data={books}
                data={characters}
                saveCharacter={saveChar}
                saveBook={saveBook}
                modalClose={modalClose}
                text={text}
                modalClass={modalClass}
            />
     
        </div>
    );
};

export default Search;