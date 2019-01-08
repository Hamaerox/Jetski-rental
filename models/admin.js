const mongoose = require("mongoose");  
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const adminSchema = new Schema({  
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }

})
    // Encrypts password on Signup

adminSchema.pre("save", function(next) {
    const user = this
    if (!user.isModified("password")) return next()
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) return next(err)
        user.password = hash
        next()
    })
})

// Decrypts and compares password on login
adminSchema.methods.checkPassword = function(passwordAttempt, callback){
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if (err) return callback(err)
        callback(null, isMatch)
    })
}

// Removes password from user obj when sent to the front end
adminSchema.methods.withoutPassword = function(){
    const user = this.toObject()
    delete user.password
    return user
} 


    


module.exports = mongoose.model("Admin", adminSchema); //admin model using the admin schema
