const express = require('express');
const fs = require('fs');
const app = express();
const morgan = require('morgan');
const tourrouter = require('./routes/tourroutes')

//1. Middleware
app.use(morgan('dev'))
app.use(express.json());

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
})
// Routes
app.use('/api/v1/tours',tourrouter);


const port = 3000;
app.listen(port, () => {
    console.log(`App runing on the port ${port}....`);
})

