const userModel=require('../Models/UserModel');
const {validationResult}=require('express-validator');
const userService=require('../services/userService');
module.exports.registerUser=async (req,res,next)=>{

    const errors=validationResult(req);

    if(!errors){
      return res.status(400).json({errors:errors.array()});
    }
    
    const {fullname,email,password}=req.body;
    console.log('fulname',fullname);
    const hashPassword=await userModel.hashPassword(password);

    const firstname=fullname.firstname;
    const lastname=fullname.lastname;
    console.log('firstname',firstname,'lastname',lastname);

    const user= await userService.registerUser({firstname,
      lastname,
      email,
      password:hashPassword
    }
    );

    const token= user.generateToken();
    console.log("token", token)
    res.status(200).json({token,user});
    
}