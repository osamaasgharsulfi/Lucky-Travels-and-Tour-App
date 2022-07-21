const express = require('express');
const fs = require('fs');
const tourController = require('./../controllers/tourController') ;

const router = express.Router();

router
.route('/')
.get(tourController.getAllTours)
.post(tourController.createNewTour)

router
.route('/:id')
.get(tourController.getTour)
.delete(tourController.deleteTour)

module.exports = router;