const config = require("../Configuration/config");
const mongoose = require("mongoose");

const url = config.database;
const connect = mongoose.connect(url);
connect.then(
  (db) => {
    console.log("Connected correctly to server");
  },
  (err) => {
    console.log(err);
  }
);
