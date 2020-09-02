const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Viniman!");
});

app.listen(3001);