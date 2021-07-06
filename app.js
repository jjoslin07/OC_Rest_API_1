// MONGDODB CONNECTION : mongodb+srv://Joe:<password>@cluster0.fip4x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

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

app.post('/api/stuff', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'Thing created successfully!'
    });
});

app.use('/api/stuff', (req, res, next) => {
    const stuff = [{
            _id: 'oainfeoifnaoin',
            title: 'My first thing',
            description: 'All of the info about my first thing',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Hasselblad_500_CM.jpg/1024px-Hasselblad_500_CM.jpg',
            price: 4900,
            userId: 'oaignoainge',
        },
        {
            _id: 'aigoeaingoieng',
            title: 'My second thing',
            description: 'All of the info about my second thing',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Hasselblad_500_CM.jpg/1024px-Hasselblad_500_CM.jpg',
            price: 3999,
            userId: 'oaignoainge',
        },

    ];
    res.status(200).json(stuff);
});

module.exports = app;