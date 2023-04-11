var express = require('express');
var router = express.Router();
const Ticket = require('./../models/tickets')
const moment = require('moment')

// Recupere les tickets dans le panier
router.get('/cart', (req, res) => {
    Ticket.find({isPayed: false}).populate('trip').then(tick => res.json(tick))
})

// Status du ticket acheté
router.post('/cart/:tickId', (req, res) => {
    Ticket.updateOne({ _id: req.params.tickId}, { isPayed: true}).then(tick => res.json(tick))
})

// Supprime le ticket du panier
router.delete('/cart/:tickId', (req, res) => {
    Ticket.deleteOne({ _id: req.params.tickId}).then(tick => res.json(tick))
})

// Recupere les tickets achetés
router.get('/booked', (req, res) => {
    Ticket.find({isPayed: true}).populate('trip').then(tick => res.json(tick))
})

// Ajoute le ticket au panier
router.post('/:tripId', (req, res) => {
    const newTicket = new Ticket({
        isPayed: false,
        trip: { _id : req.params.tripId }
    })
    
    newTicket.save().then(() => res.json(newTicket))
})



module.exports = router