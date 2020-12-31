const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the Characters below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/characters");
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/allchars");
const CharacterSeed = [
  {
      id: 1,
      name: "Batman",
      attack: ["Bat DANCE" , "Bat Mobile" , "Brooding and Smouldering", "Daddy Issues", "Ask Alfred"],
      image: "./Images-char/batperson.png",
      date: new Date(Date.now())
  },
  {
      id: 2,
      name: "House Plant",
      attack: ["Drop Leaves", "Leak Water", "Make Clones", "Shrivel" , "Growth Spurt"],
      image: "./Images-char/houseplant.png",
      date: new Date(Date.now())
  },
  {
      id: 3,
      name: "Barack Obama",
      attack: ["Dunks ON YOU", "Dad Jokes", "Tan Suit", "Swagger", "Ask Michelle"],
      image: "./Images-char/obama.png",
      date: new Date(Date.now())
  },
  {
      id: 4,
      name: "Ninja",
      attack: ["Sneaky Sneaky", "Surprise! Behind You", "Nunchucks", "Karate Chop", "Roundhouse Kick"],
      image: "./Images-char/ninja.png",
      date: new Date(Date.now())
  },
  {
      id: 5,
      name: "LA DRIVER",
      attack:  ["Break Check", "Cut Off", "Surprise Turn", "Change 3 lanes at once", "Change Lanes into You"],
      image: "./Images-char/LADrivers.png",
      date: new Date(Date.now())
  },
  {
      id: 6,
      name: "Stationary Exercise Bike",
      attack:  ["Butt Cramps", "Toe Stub", "Dehydration", "Wack your pet with the Pedals", "Fall Off"],
      image: "./Images-char/statbike.png",
      date: new Date(Date.now())
  },
  {
      id: 7,
      name: "Hot Dog",
      attack:  ["Ketchup/Mustard on Your Shirt", "Too Good to Resist", "Not enough bun son", "Can't Have Just One", "Food Poisoning"],
      image: "./Images-char/hotdog.png",
      date: new Date(Date.now())
  },
  {
      id: 8,
      name: "Seth Rogan (and friend)",
      attack: ["Blaze Up", "Sorry" , "Weird Laughing" , "Munchies" , "Bagged Milk"],
      image: "./Images-char/SethandJames.png",
      date: new Date(Date.now())
  },
  {
      id: 9,
      name: "Rick Astley",
      attack:  ["Never Going to Give You Up" , "Never Going to Let You Down" , "Never Going to Make You Cry", "Never Going to Say Goodbye"],
      image: "./Images-char/rickya.png",
      date: new Date(Date.now())
  },
  {
      id: 10,
      name: "Wess",
      attack:  ["lo-fi beats" , "No More Lowes!" , "Resistance Bands" , "Fitness" , "Bad Pancake"],
      image: "./Images-char/Wess.png",
      date: new Date(Date.now())
  },
  {
      id: 11,
      name: "Hypno Toad",
      attack:  ["HYPNOTIZE", "STUPIFY" , "MESMERIZE" ,"CONFOUND" , "BEWILDER"],
      image: "./Images-char/hypnotoad.png",
      date: new Date(Date.now())
  },
  {
      id: 12,
      name: "PE Teacher",
      attack:  ["DODGE THE BALL!" , "RUN LAPS!" , "CLIMB THE ROPE" , "SEX ED", "Being Creepy"],
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
