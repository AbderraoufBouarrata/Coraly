const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());

//import all the routes 
const users = require('./routes/user');
const processes = require('./routes/process');

app.use('/api/v1', cors(), users);
app.use('/api/v1', cors(), processes);
//middleware to handle errors

module.exports = app;