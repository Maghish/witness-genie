require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');


const app = express()

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
})

app.get('/', (req, res) => {
    res.json({msg: "Hello World!"});
})

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT , () => {
        console.log(`listening on port ${process.env.PORT}`)
    })
})
.catch(error => {throw error})

