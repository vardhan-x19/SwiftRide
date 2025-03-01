import { configureStore, createSlice } from '@reduxjs/toolkit';
import userSlice from './user';
import captainSlice from './captain';
import mapSlice from './map';
const store = configureStore({
  reducer: {
    logInUser: userSlice.reducer,
    captainLogin:captainSlice.reducer,
    search:mapSlice.reducer
  },
});

export default store;