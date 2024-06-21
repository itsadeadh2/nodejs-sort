const serverless = require('serverless-http');
const { app } = require('./infrastructure/server');
module.exports.handler = serverless(app);