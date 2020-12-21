import axios from 'axios';

const API = {
    getCharacters: function() {
        return axios.get('/characters.json')
    },

    // grab the books from the database that was saved by the user
    getApiChars: function() {
        return axios.get("/api/characters");
    },
    // grab the books from the database that was saved by the user
 
  getCharacter: function(id) {
    return axios.get("/api/characters/" + id);
  },
    // add a book to the database when the user clicks save book

    addCharacter: function(data) {
        return axios.post("/api/characters", data);
    },
    // delete the book by id when the user decides to remove from the saved page
    // deleteBook: function(id) {
    //     return axios.delete("/api/books/" + id);
    // },

    deleteCharacter: function(id) {
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