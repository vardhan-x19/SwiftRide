const dotenv=require('dotenv');
const dbConnection=require('./db/db');
const UserRouter=require('./routes/user.routes');
const CaptainRouter=require('./routes/captains.routes');
const cookieParser=require('cookie-parser');
const express=require('express');
const cors=require('cors');
const morgan=require('morgan');
const app=express();  
const mapsRoutes = require('./routes/maps.routes');
const rideRoutes=require('./routes/ride.routes');
dotenv.config();
dbConnection();
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors());//only thise domian can aceess the api 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('Hello World');
})
app.use('/captains',CaptainRouter);
app.use('/users',UserRouter);
app.use('/maps', mapsRoutes);
app.use('/ride',rideRoutes);

module.exports= app;