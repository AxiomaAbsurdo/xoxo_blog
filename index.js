"use strict"

const path = require('path');
const expressEdge = require('express-edge');
const express = require('express');
const app = new express();

app.use(express.static('public'));


//GET INDEX PAGE AND LOAD IT
app.get('/index', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/index.html'));
});

//GET ABOUT PAGE AND LOAD IT
app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/about.html'));
});

//GET CONTACT PAGE AND LOAD IT
app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
});

//GET POST PAGE AND LOAD IT
app.get('/post', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/post.html'));
});

app.listen(4000, () => {
    console.log('App listening on port 4000')
});

