import axios from 'axios';

const API = {
    getCharacters: function() {
        return axios.get('/characters.json')
    },
    // axios call to grab the books from the google books API and the search input of the user
    getBooks: function(book) {
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + book)
    },
    // grab the books from the database that was saved by the user
    getApiBooks: function() {
        return axios.get("/api/books");
    },
      // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  getCharacter: function(id) {
    return axios.get("/api/characters/" + id);
  },
    // add a book to the database when the user clicks save book
    addBook: function(data) {
        return axios.post("/api/books", data);
    },   // add a book to the database when the user clicks save book
    addCharacter: function(data) {
        return axios.post("/api/characters", data);
    },
    // delete the book by id when the user decides to remove from the saved page
    // deleteBook: function(id) {
    //     return axios.delete("/api/books/" + id);
    // },
    deleteCharacters: function(id) {
        return axios.delete("/api/characters/" + id);
    },
    // find a book by id
    findBook: function(id) {
        return axios.get("/api/search");
    },
    findCharacter: function(id) {
        return axios.get("/api/search");
    },
    saveChar: function(characterData) {
        return axios.post("/api/characters/", characterData);
      }
};

export default API;