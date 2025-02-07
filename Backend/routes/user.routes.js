const express = require('express');
const router = express.Router();  
const {body}=require('express-validator');
const userController=require('../Controller/user.controller');

router.post('/register',[
  body('fullname.firstName').isLength({min:3}).withMessage('First name must be atleast 3 characters long'),
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({min:5}).withMessage('Password must be atleast 8 characters long'),
],userController.registerUser);



module.exports=routes;