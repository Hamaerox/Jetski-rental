const express = require("express")
const Admin = require("../models/admin");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");

authRouter.post("/signup", (req, res, next) => {
    
    Admin.findOne({username: req.body.username}, (err, existingAdmin) => {
        
        if (err) {
            res.status(500)
            return next(err)
        }
        
        
        if (existingAdmin) {
               res.status(400)
               return next(new Error ("That username already exists!"))
        }
       
        const newAdmin = new Admin(req.body)
        newAdmin.save((err, addedAdmin) => {
            
            if (err) {
             res.status(500)
             return next(err)

        }
            const token = jwt.sign(addedAdmin.withoutPassword(), process.env.SECRET);
            return res.status(201).send({success: true, admin: addedAdmin.withoutPassword(), token});
        })
    })
})




authRouter.post("/login", (req, res, next) => {
    Admin.findOne({username: req.body.username}, (err, admin) => {
        if (err) {
        res.status(500)
        return next(err)
        }

        // If that user isn't in the database OR the password is wrong:
        if (!admin ) {
             res.status(403)
             return next(new Error( "Username or password are incorrect"))
        }

        admin.checkPassword(req.body.password, (err, match )=>{ //this function runs the check password method from the schema, it decrypts the password and compares it w the users input

            if(err){
                res.status(500)
                return next(err)
            }
            
            if(!match){
                res.status(403)
             return next(new Error( "Username or password are incorrect")) //if password doesn not match send back this error
            }

            const token = jwt.sign(admin.withoutPassword(), process.env.SECRET) //if match is true create token

             // Send the token back to the client app.
            return res.send({token: token, admin: admin.withoutPassword(), success: true})
       })
    })
})



authRouter.get('/', (req, res) => {    // get all for testing with postman 
    
    Admin.find((err, data) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)

    })
})



authRouter.delete('/', (req, res, next) => {
    
     Admin.remove((err, data) => {      // for testing, deletes  all the admins on the /auth endpoint!
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(202).send(` was succesfully deleted!`)
    })
})


module.exports = authRouter
