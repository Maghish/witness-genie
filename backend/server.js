// require all the packages
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// initialize express app
const app = express()

// middleware
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
})

// return json response on '/' route
app.get('/', (req, res) => {
    res.json({msg: "Hello World!"});
})

// connect to mongodb 
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // log out a message saying that connected to mongodb successfully
    console.log("Connected to MongoDB successfully")
    // start listening to port 
    app.listen(process.env.PORT , () => {
        console.log(`listening on port ${process.env.PORT}`)
    })
})
.catch(error => {throw error})

