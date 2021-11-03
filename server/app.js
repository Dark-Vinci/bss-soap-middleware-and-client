const express = require('express');

const port = process.env.PORT || 3030;

const app = express(); 
require('./appHelper')(app, port);

const server = app.listen(port, () => console.log(`server is on at port ${ port }`));
module.exports = server;