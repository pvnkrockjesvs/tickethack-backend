const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    price: Number,
    time: Date,
    departure: String,
    arrival: String
})

const Trip = mongoose.model('trips', tripSchema)
module.exports = Trip