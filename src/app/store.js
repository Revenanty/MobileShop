import { configureStore } from '@reduxjs/toolkit';
import moblieSlice from './moblieSlice';

export const store = configureStore({
  reducer: {
    mobile: moblieSlice,
  },
});
