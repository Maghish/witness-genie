// require the packages
const express = require('express');

// get the model
const exerciseModel = require('../models/exerciseModel.js');

// create an instance of the express router
const router = express.Router();

router.get('/', async (req, res) => {
    const name = "Test";
    const desc = "This is a test!";
    const stars = 3
    try {
        const exercise = await exerciseModel.create({name: name, description: desc, stars: stars})
        res.status(200).json(exercise);
    }

    catch (error) {
        res.status(400).json({error: error.message})
    }  
})

module.exports = router;