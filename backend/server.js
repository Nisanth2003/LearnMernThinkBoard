//const express = require("express"); //if the type is commonjs in package.json which is a default.

import express from "express"; //if the type is module in package.json, then we can use this syntax.
const app = express();


app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(5001,() => {
    console.log('Server is running on port 5001');
});
