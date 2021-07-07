// MONGDODB CONNECTION : mongodb+srv://Joe:<password>@cluster0.fip4x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff');
const app = express();

mongoose.connect('mongodb+srv://Joe:ZCEoqhb8nF13Qg4l@cluster0.fip4x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => {
        console.log('Successfully connected to MongoDB Atlas!');
    })
    .catch((error) => {
        console.log('Unable to connect to MongoDB Atlas!');
        console.error(error);
    });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api/stuff', stuffRoutes);

module.exports = app;