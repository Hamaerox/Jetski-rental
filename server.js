const express = require('express')
const app = express()
require ('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require("express-jwt");
const PORT = process.env.PORT || 8000


app.use(express.json()) 
app.use(morgan('dev'))  
app.use("/api", expressJwt({secret: process.env.SECRET})) //req.user === {username, password, _id}


//Routes
app.use('/bookings', require('./routes/bookings'))
app.use("/auth", require("./routes/auth"));



mongoose.connect('mongodb://localhost:27017/version2', {useNewUrlParser: true}, () => {
    console.log('connect to the db captain!')    // name of database is version2
})



app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
        
        res.status(err.status); //secret error 
    }
    return res.send({errMsg: err.message})
})



app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT} sir!`)
})