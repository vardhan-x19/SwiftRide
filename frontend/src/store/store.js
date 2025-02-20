import { configureStore, createSlice } from '@reduxjs/toolkit';
import userSlice from './user';
import captainSlice from './captain';
const store = configureStore({
  reducer: {
    logInUser: userSlice.reducer,
    captainLogin:captainSlice.reducer
  },
});

export default store;