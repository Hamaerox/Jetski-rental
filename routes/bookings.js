const express = require('express')
const bookingsRouter = express.Router()
const Booking = require("../models/bookings")



bookingsRouter.get('/', (req, res) => {    // get all for testing with postman 
    
    Booking.find((err, data) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)

    })
})


bookingsRouter.delete('/', (req, res, next) => {
    
    Booking.remove((err, data) => {      // for postman testing, deletes everything !
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(202).send(` was succesfully deleted!`)
    })
})


bookingsRouter.post('/', (req, res) => {   //for testing with postman
    
    const newBooking = new Booking(req.body)
    
    newBooking.save((err, booking) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(booking)
    })
})



// check if the user is in the database and the time and date requested is availabale 

bookingsRouter.post('/:email', (req, res, next) => {
    Booking.findOne({email: req.params.email}, (err, booking) => {
        if (err) {
            res.status(500)
            return next(err)
        }
            
        if(booking){ 
            return res.status(200).send(booking)

        } else {
            
            const newBooking = new Booking(req.body)
            newBooking.save((err, booking) => {
                if (err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(booking)
            })
        }
    })
})




module.exports = bookingsRouter