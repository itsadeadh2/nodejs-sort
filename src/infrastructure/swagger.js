const swaggerJsdoc = require('swagger-jsdoc');
const swaggerDocument = require('../swagger.json');

const options = {
    definition: swaggerDocument,
    apis: [`${__dirname}/router.js`], // Path to the API docs
};
const specs = swaggerJsdoc(options);

module.exports = specs