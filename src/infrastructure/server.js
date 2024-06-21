const express = require('express');
const helmet = require('helmet');
const path = require('path');

const router = require('./router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

module.exports = app;