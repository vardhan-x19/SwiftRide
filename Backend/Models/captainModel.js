const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const captainSchema=mongoose.Schema({

  fullname:{
    firstname:{
      type:String,
      required:true,
      minLength:[3,'first name must be atleast 3 characters long']
    },
    lastname:{
      type:String,

      minLength:[3,'last name must be atleast 3 characters long']
    },
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    match:[/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,'Invalid email']
  },
  password:{
    type:String,
    required:true,
    select:false,
    minLength:[5,'password must be atleast 5 characters long']
  },
  socketId:{
    type:String
  },
  status:{
    type:String,
    enum:['active','inactive',],
    default:'inactive'
  },
  vehicle:{
    color:{
      type:String,
      required:true,
      minLength:[3,'color must be atleast 3 characters long']
    },
    plate:{
      type:String,
      required:true,
      minLength:[3,'plate must be atleast 3 characters long']
    },
    capacity:{
      type:Number,
      required:true,
      min:[1,'capacity must be atleast 1']
    },
    vehicleType:{
      type:String,
      required:true,
      enum:['car','motorcycle','auto']
    }
  },
  location:{
    ltd:{
      type:Number,
    },
    lng:{
      type:Number,
    }
  },
})

captainSchema.methods.generateAuthToken= function(){
  const token = jwt.sign(
    { _id: this._id },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
  return token;
}

captainSchema.methods.comparePassword=async function(password){
  return await bcrypt.compare(password,this.password);
}

captainSchema.statics.hashPassword=async function(password){
  return await bcrypt.hash(password,10);
}

const captainModel=mongoose.model('captain',captainSchema);
module.exports=captainModel;