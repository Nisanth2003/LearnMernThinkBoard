//const express = require("express"); //if the type is commonjs in package.json which is a default.

import express from "express"; //if the type is module in package.json, then we can use this syntax.
const app = express();
// What is an Endpoint?
// An endpoint is alcombination of a URL + HTTP method that lets the client
// interact with a specific resource.
//this is what we call route as well
app.get('/', (req, res) => {
    res.send("Hello World");
});
app.get('/status_code', (req, res) => {
    res.status(200).send("Hello World");
});
app.post('/status_code1', (req, res) => {
    res.status(201).send("your world is created sucussfully");
});

//we cannot update randomly so userrole will send it.
//https://localhost:5001/api/notes/1234
app.put("/api/notes/:id", (req, res) => {
    res.status(200).json({message:"Post updated successfully!"});
});

app.listen(5001,() => {
    console.log('Server is running on port 5001');
});
