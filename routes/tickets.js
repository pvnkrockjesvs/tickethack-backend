var express = require('express');
var router = express.Router();
const Ticket = require('./../models/tickets')
const moment = require('moment')


router.get('/cart', (req, res) => {
    Ticket.find({isPayed: false}).populate('trip').then(tick => res.json(tick))
})

router.get('/booked', (req, res) => {
    Ticket.find({isPayed: true}).populate('trip').then(tick => res.json(tick))
})


router.post('/:tripId', (req, res) => {
    const newTicket = new Ticket({
        isPayed: true,
        trip: { _id : req.params.tripId }
    })
    
    newTicket.save().then(() => res.json(newTicket))
})

module.exports = router