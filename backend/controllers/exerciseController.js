// get the route
const exerciseModel = require('../models/exerciseModel.js');

const createExercise = async (req, res) => {
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
}

module.exports = {
    createExercise,
}