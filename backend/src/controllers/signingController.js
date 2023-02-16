const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.signIn = (req, res, status)=>{

    try{
        User.findOne({email: req.body.email}).exec().then(async user=>{
            if(user != undefined){
                if(await bcrypt.compare(req.body.password, user.hashPassword)){
                    const token = jwt.sign({
                        _id: user._id,
                        role: user.role
                    }, process.env.JWT_KEY, {expiresIn: '2h'})
                    return res.status(200).json({
                        user,
                        token
                    })
                } 
                else{
                    return res.status(401).json({
                        message: "Wrong data"
                    })
                }
            }
            else{
                throw new Error('Error while handling found user')
            }
        })
    }
    catch(e){
        return res.status(400).json({
            error: e
        })
    }
}

exports.signUp = (req, res, status)=>{
    const {email, username, password, firstName, lastName} = req.body
    let role = 'User'
    if(req.body.role == 'Admin'){
        role = 'Admin'
    }
    try{
        User.findOne({email: req.body.email}).exec().then(async user=>{
            if(user){
                return res.status(400).json({
                    message: 'User already exists'
                })
            }
            else{
                const user = new User({
                    email,
                    username,
                    hashPassword: await bcrypt.hash(password, 10),
                    firstName,
                    lastName,
                    role
                })
                
                user.save().then(user=>{
                    const token = jwt.sign({
                        _id: user._id,
                        role: user.role
                    }, process.env.JWT_KEY, {expiresIn: '2h'})
                    res.status(200).json({
                        message: "Signed up",
                        user,
                        token
                    })
                }).catch(error=>{
                    return res.status(400).json({
                        error
                    })
                })
            }
        })
    }
    catch(e){
        return res.status(400).json({
            error: e
        })
    }
}

exports.userActive = (req, res, status)=>{
    const token = req.params.token
    try{
        if(jwt.verify(token, process.env.JWT_KEY)){
            return res.status(200).json({
             message: 'User active'
            })
         }
         else{
             return res.status(400).json({
                 message: 'User not active'
             })
         }
    }
    catch(e){
        return res.status(400).json({
            message: 'User not active'
        })
    }
    
}