const dotenv=require('dotenv');
const dbConnection=require('./db/db');

const express=require('express');
const cors=require('cors');
const app=express();  
dotenv.config();
dbConnection();
app.use(cors());//only thise domian can aceess the api 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('Hello World');
})


module.exports= app;