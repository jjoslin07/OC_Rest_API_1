const express = require('express');
const app = express();

// Logs "Request received" to the console, and hands on execution.
app.use((req, res, next) => {
    console.log('Request received!');
    next();
});
// Adds a 201 status code to the response, and hands on execution.
app.use((req, res, next) => {
    res.status(201);
    next();
})
// Sends the JSON response, and hands on execution.
app.use((req, res, next) => {
    res.json({
        message: 'Your request was successful!'
    });
    next();
});
// Logs "Response sent successfully" to the console.
app.use((req, res, next) => {
    console.log('Response sent successfully!');
});

module.exports = app;