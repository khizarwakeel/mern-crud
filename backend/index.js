const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 8000;
const route = require("./routes/route");

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("DB Connected Successfully!");
  })
  .catch((error) => {
    console.log("Error", error);
  });

app.use(route);

app.listen(port, (error) => {
  if (error) {
    console.error("Error starting server:", error);
  } else {
    console.log(`Server is listening on port ${port}`);
  }
});