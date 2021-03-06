const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const songSeed = [
  {
    title: "jam",
    creator: "dude",
    audio: "test",
    genre: "test",
    instrument: "guitar",
    description: "stuff"
  }
];

db.Song
  .remove({})
  .then(() => db.Book.collection.insertMany(songSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
