var db_user = require('../models/user');
var bcrypt = require('bcryptjs');

// User Register

exports.register = (req,res)=>{
    var Vemail = req.body.email;
    console.log(Vemail);

    db_user.find({email:Vemail},function(err,data) {
      if(data.length>0) {
        res.json({
            success : false ,
            message : "User Already Exists"
        });
      }
      else {
        var obj = new db_user({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password,10)
        })
        obj.save((err,data)=>{
            if(!err){
                res.json({
                success:true,
                message: 'User registered successfully',
                data :{
                first_name: obj.first_name,
                last_name:obj.last_name,
                email: obj.email
                }
                })
            }
            else{
                res.json({
                    success : false ,
                    message : 'invalid data format!'
                });
            }
        });
      }
    })
}
