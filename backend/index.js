const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Api is running! Wow");
});

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("DB Connected Successfully!");
  })
  .catch((error) => {
    console.log("Error", error);
  });

app.listen(port, (error) => {
  if (error) {
    console.error("Error starting server:", error);
  } else {
    console.log(`Server is listening on port ${port}`);
  }
});