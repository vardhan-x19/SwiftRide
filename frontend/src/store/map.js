import { createSlice } from "@reduxjs/toolkit";

const mapSlice=createSlice({
  name:"search",
  initialState:{
    input:"pickUp"
  },
  reducers:{
    setDropINput:(state)=>{
      state.input="drop";
    },
    setPickInput:(state)=>{
      state.input="pick";
    }
   
  }
})

export default mapSlice;

export const{getUser,setDropINput,setPickInput}=mapSlice.actions;