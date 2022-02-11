const express = require('express');

const app = express();

app.use(express.static(__dirname + "/public"));

console.log(__dirname+"/public");

app.use("/", (req, res) => {
    res.sendFile(__dirname+'/index.html');
});

app.listen(8001, () => {
    console.log("ScrollingBird listening to localhost:8001");
});
