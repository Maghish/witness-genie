// require all the packages
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// get the routes
const exerciseRoutes = require('./routes/exercise.js');

// initialize express app
const app = express()

// middlewares
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
})

app.use(exerciseRoutes);

// connect to mongodb 
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // log out a message saying that connected to mongodb successfully
    console.log("Connected to DB successfully")
    // start listening to port 
    app.listen(process.env.PORT , () => {
        console.log(`listening on port ${process.env.PORT}`)
    })
})
.catch(error => {throw error})

