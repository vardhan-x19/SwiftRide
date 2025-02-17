import { configureStore, createSlice } from '@reduxjs/toolkit';
import userSlice from './user';
const store = configureStore({
  reducer: {
    logInUser: userSlice.reducer,
  },
});

export default store;