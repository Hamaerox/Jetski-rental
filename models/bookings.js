const mongoose = require('mongoose')
const Schema = mongoose.Schema




const bookingsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
        
    },
    phone: {
        type:Number,
        required: false
    },
    time: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: false
    }
    
     
})

module.exports = mongoose.model("bookings", bookingsSchema)