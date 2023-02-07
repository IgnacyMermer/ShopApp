const User = require('../models/User')


exports.signIn = (req, res, status)=>{
    console.log(req.body.email)
    try{
        User.findOne({email: req.body.email}).exec().then(user=>{
            console.log(user)
            if(user != undefined){
                return res.status(200).json({
                    user
                })
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
