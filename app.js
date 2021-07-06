const express = require('express');
const app = express();

app.use('/api/stuff', (req, res, next) => {
    const stuff = [{
            _id: 'oainfeoifnaoin',
            title: 'My first thing',
            description: 'All of the info about my first thing',
            imageUrl: '',
            price: 4900,
            userId: 'oaignoainge',
        },
        {
            _id: 'aigoeaingoieng',
            title: 'My second thing',
            description: 'All of the info about my second thing',
            imageUrl: '',
            price: 2900,
            userId: 'oaignoainge',
        },

    ];
    res.status(200).json(stuff);
});

module.exports = app;