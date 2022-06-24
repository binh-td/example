import { configureStore } from '@reduxjs/toolkit';
import authReducer from './redux/Login/authSlice';

export const store = configureStore({
  reducer: { auth: authReducer },
})