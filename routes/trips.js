var express = require('express');
var router = express.Router();
const Trip = require('./../models/trips')
const moment = require('moment')

router.get('/', (req,res) => {
    Trip.find().then((trips) => {
        res.json(trips)
    })
})

router.get('/:departure&:arrival&:date', (req, res) => {
    Trip.find({ departure: req.params.departure,
                arrival: req.params.arrival,
                date: { "$gte" : new Date(moment(req.params.date)), 
                "$lt" : new Date(moment(req.params.date).add(1, 'd'))}
            })
    .then((trips) => {
        res.json(trips)
    })
})

module.exports = router;
