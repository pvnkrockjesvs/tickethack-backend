var express = require('express');
var router = express.Router();
const Trip = require('./../models/trips')

router.get('/', (req,res) => {
    Trip.find().then((trips) => {
        res.json(trips)
    })
})

module.exports = router;
