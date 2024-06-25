const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Api is running! Wow")
})

app.listen(4000)