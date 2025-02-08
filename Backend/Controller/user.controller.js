const userModel=require('../Models/UserModel');
const {validationResult}=require('express-validator');
const userService=require('../services/userService');

//register user function
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

//login user function
module.exports.loginUser=async(req,res,next)=>{
  const err=validationResult(req);

  if(!err){
    return res.status(400).json({errors:err.array()});
  }

  const {email,password}=req.body;
  //because we put password as not selected in the schema we have to select it here
  const user=await userModel.findOne({email:email}).select('+password');
  if(!user){
    res.status(401).json({message:'Invalid email or password'});
  }
  const isMatch=await user.comparePassword(password);
  if(!isMatch){
    //res status 401 is for unauthorized
    //400 is client error bad request
    return res.status(401).res.json({message:'Invalid email or password'});
  }
  const token=user.generateToken();
  res.status(200).json({token,user});
}