const express = require('express');

const app = express();

app.use("/", (req, res) => {
    res.sendFile(__dirname+'index.html');
});

app.listen(8000, () => {
    console.log("ScrollingBird listening to localhost:8000");
});