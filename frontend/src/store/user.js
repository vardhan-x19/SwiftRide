import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
  name:"logInUser",
  initialState:{
    user :{
      name:"harsha"
    }
  },
  reducers:{
    getuser:(state)=>{
      return state.user;
    },
    setUser:(state,action)=>{
      console.log('setUser reducer');
        state.user=action.payload;
    }
  }
})

export default userSlice;

export const{getUser,setUser}=userSlice.actions;