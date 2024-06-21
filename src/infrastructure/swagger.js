const swaggerJsdoc = require('swagger-jsdoc');
const swaggerDocument = require('../swagger.json');

swaggerDocument.servers[0].url = process.env.LAMBDA_URL || 'http://localhost:3000';
const options = {
    definition: swaggerDocument,
    apis: [`${__dirname}/router.js`], // Path to the API docs
};
const specs = swaggerJsdoc(options);

module.exports = specs