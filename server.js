const express = require('express')
const app = express()
require ('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require("express-jwt");
const PORT = process.env.PORT || 8000
const path = require("path")

app.use(express.json()) 
app.use(morgan('dev'))  
app.use("/api", expressJwt({secret: process.env.SECRET})) //req.user === {username, password, _id}
app.use(express.static(path.join(__dirname, "client", "build")))


//Routes
app.use('/bookings', require('./routes/bookings'))
app.use("/auth", require("./routes/auth"));



mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/version2', {useNewUrlParser: true}, () => {
    console.log('connect to the db captain!')    // name of database is version2
})



app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
        
        res.status(err.status); //secret error 
    }
    return res.send({errMsg: err.message})
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT} sir!`)
})