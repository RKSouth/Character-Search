import axios from 'axios';

const API = {
//need two db's 
//one for all characters (allchar) 
//-where newly created characters are saved and pulled
//another for saved characters from a user database
//maybe need a user database that holds user info + saved character info
//will need passport for this

    getCharacters: function(searching) {
        console.log(searching);
        return axios.get('/api/characters', searching)
    },
    // grab the characters from the database that was saved by the user
    getApiChars: function() {
        return axios.get("/api/characters");
    },
    // grab the characters from the database that was saved by the user
     getCharacter: function(id) {
    return axios.get("/api/characters/" + id);
    },
    // add a character to the database when the user clicks save character
    addCharacter: function(data) {
        return axios.post("/api/characters", data);
    },
    deleteCharacter: function(id) {
        return axios.delete("/api/characters/" + id);
    },
    // find a character by id
    findCharacter: function(id) {
        return axios.get("/api/search");
    },
    saveChar: function(characterData) {
        return axios.post("/api/characters/", characterData);
      },
    
};

export default API;