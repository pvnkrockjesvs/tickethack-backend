const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
    isPayed: Boolean,
    trip: [{ type: mongoose.Schema.Types.ObjectId, ref:'trips'}]
})

const Ticket = mongoose.model('tickets', ticketSchema)

module.exports = Ticket