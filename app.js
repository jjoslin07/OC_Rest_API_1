const express = require('express');
const bodyParser = require('body-parser');

const app = express();

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