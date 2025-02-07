const userModel=require('../models/userModel');
const {validationResult}=require('express-validator');
const userService=require('../services/userService');
module.exports.registerUser=async (req,res,next)=>{
    const errors=validationResult(req);
    if(!errors){
      return res.status(400).json({errors:errors.array()});
    }

    const {fullname,email,password}=req.body;
    
    const hashPassword=await userModel.hashPassword(password);

}