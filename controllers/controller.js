const db = require("../models");

// Creating all of our controllers 
module.exports = {
  // creating a function to find all of the books inside of our database
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      // sending the response as json. 
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Function to find books by ID. 
  findById: function(req, res) {
    db.Book
      // using params to get the id
      .findById(req.params.id)
      // sending the response back as json
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Function to create a new book or (save) a new book to the data base.
  create: function(req, res) {
    db.Book
    // using the req.body to get the book and send it back to the data base. 
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Function to remove or (delete) a book from the database. 
  remove: function(req, res) {
    db.Book
    // takingn the id from the params and matching it to the one in our data base.
      .findById({ _id: req.params.id })
      // deleting it from the database. 
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};