"use strict"

const path = require('path');
// const expressEdge = require('express-edge');
const { config, engine } = require('express-edge');
const express = require('express');
const app = new express();

app.use(express.static('public'));
app.use(engine);

app.set('views', `${__dirname}/views`);
// app.set("views", path.resolve(__dirname, "views"));
// app.set('views', path.join(__dirname, 'views'));
// console.log( `Concha de tu madre ${__dirname}` )


//GET INDEX PAGE AND LOAD IT
// app.get('/index', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'pages/index.html'));
// });
app.get('/index', (req, res) => {
    // console.log( `Concha de tu madre 2 ${__dirname}` )
    res.render('index');
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

