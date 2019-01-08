const express = require("express")
const Admin = require("../models/admin");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");

//post a new user to user collection (signing up)
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
       
        const newAdmin = new Admin(req.body);
        newAdmin.save((err, addedAdmin) => {
            if (err) {
             res.status(500)
             return next(err)

        }
            
           
            const token = jwt.sign(addedAdmin.toObject(), process.env.SECRET);
            return res.status(201).send({success: true, admin: addedAdmin.toObject(), token});
        });
    });
});




authRouter.post("/login", (req, res) => {
    // Try to find the user with the submitted username 
    Admin.findOne({username: req.body.username}, (err, admin) => {
        if (err) return res.status(500).send(err);

        // If that user isn't in the database OR the password is wrong:
        if (!admin || admin.password !== req.body.password) {
            return res.status(403).send({success: false, err: "Username or password are incorrect"})
        }

        
        const token = jwt.sign(admin.toObject(), process.env.SECRET);

        // Send the token back to the client app.
        return res.send({token: token, admin: admin.toObject(), success: true})
    });
});



authRouter.get('/', (req, res) => {    // get all for testing with postman 
    
    Admin.find((err, data) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)

    })
})

module.exports = authRouter;
