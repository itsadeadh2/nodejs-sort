const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Hello from Express on AWS Lambda!' });
});

app.get('/test', (req, res) => {
    res.json({ message: 'Hello from Express on AWS Lambda!' });
});


module.exports.handler = serverless(app);