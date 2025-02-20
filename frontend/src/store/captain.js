import { createSlice } from "@reduxjs/toolkit";

const captainSlice=createSlice({
  name:"captainLogin",
  initialState:{
    captain :{
      name:"captain"
    }
  },
  reducers:{
    getcaptain:(state)=>{
      return state.user;
    },
    setCaptain:(state,action)=>{
      console.log('setUser reducer');
        state.user=action.payload;
    }
  }
})

export default captainSlice;

export const{getcaptain,setCaptain}=captainSlice.actions;