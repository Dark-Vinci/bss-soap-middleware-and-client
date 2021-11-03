const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const express = require('express');

const payment = require('./route/payment');
const notFound = require('./route/notFound');

module.exports = function (app, port) {
    // setting the need swagger options
    const swaggerOptions = {
        swaggerDefinition: {
            info: {
                title: "BSS restful service",
                description: "A resftul service that act as middleware for BSS SOAP service",
                contact: {
                    name: 'ADEMOLA OLUTOMIWA'
                },
                servers: [`http://localhost:${ port }`]
            }
        },
    
        apis: ['./route/*.js']
    }

    const swaggerDocs = swaggerJsDoc(swaggerOptions);

    // setting and using the needed middleware
    app.use(express.json());
    app.use(helmet());
    app.use(cors())
    app.use(compression());
    app.use(morgan('tiny'));

    // route handler for swagger and the restful service
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
    app.use('/api/payment', payment);
    app.use('*', notFound);
}