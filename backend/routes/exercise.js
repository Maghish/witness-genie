// require the packages
const express = require('express');

// get the controller
const controller = require('../controllers/exerciseController.js');

// get the model
const exerciseModel = require('../models/exerciseModel.js');

// create an instance of the express router
const router = express.Router();

router.get('/', controller.createExercise)

module.exports = router;