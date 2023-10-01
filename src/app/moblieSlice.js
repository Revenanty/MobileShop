import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  moblieItem: [],
};

const moblieSlice = createSlice({
  name: 'mobile',
  initialState,
  reducers: {},
});

export default moblieSlice.reducer;
