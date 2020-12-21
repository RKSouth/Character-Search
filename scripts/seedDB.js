const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the Characters below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/characters");

const CharacterSeed = [
  {
      id: 1,
      name: "Batman",
      attack: "1",
      image: "./Images-char/batperson.png",
      date: new Date(Date.now())
  },
  {
      id: 2,
      name: "House Plant",
      attack: "2",
      image: "./Images-char/houseplant.png",
      date: new Date(Date.now())
  },
  {
      id: 3,
      name: "Barack Obama",
      attack: "3",
      image: "./Images-char/obama.png",
      date: new Date(Date.now())
  },
  {
      id: 4,
      name: "Ninja",
      attack: "4",
      image: "./Images-char/ninja.png",
      date: new Date(Date.now())
  },
  {
      id: 5,
      name: "LA DRIVER",
      attack: "5",
      image: "./Images-char/LADrivers.png",
      date: new Date(Date.now())
  },
  {
      id: 6,
      name: "Stationary Exercise Bike",
      attack: "6",
      image: "./Images-char/statbike.png",
      date: new Date(Date.now())
  },
  {
      id: 7,
      name: "Hot Dog",
      attack: "7",
      image: "./Images-char/hotdog.png",
      date: new Date(Date.now())
  },
  {
      id: 8,
      name: "Seth Rogan (and friend)",
      attack: "8",
      image: "./Images-char/SethandJames.png",
      date: new Date(Date.now())
  },
  {
      id: 9,
      name: "Rick Astley",
      attack: "9",
      image: "./Images-char/rickya.png",
      date: new Date(Date.now())
  },
  {
      id: 10,
      name: "Wess",
      attack: "10",
      image: "./Images-char/Wess.png",
      date: new Date(Date.now())
  },
  {
      id: 11,
      name: "Hypno Toad",
      attack: "11",
      image: "./Images-char/hypnotoad.png",
      date: new Date(Date.now())
  },
  {
      id: 12,
      name: "PE Teacher",
      attack: "12",
      image: "./Images-char/PETeacher.png",
      date: new Date(Date.now())
  }
     
]

db.Character.remove({})
  .then(() => db.Character.collection.insertMany(CharacterSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
