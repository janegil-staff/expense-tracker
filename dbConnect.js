const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on("error", (err) => console.log(err));

connection.on("connection", () =>
  console.log("Mongo DB Connection Successfully")
);
