const mongoose=require('mongoose');

function dbConnection() {
    mongoose.connect(process.env.MONGO_URL).then((res)=>{
        console.log('Connected to MongoDB');
    }).catch((err)=>{
        console.log('Error connecting to MongoDB');
        console.log(err);
    })
}

module.exports=dbConnection;


