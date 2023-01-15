import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    lastEmailed: null
  },
  reducers: {
    sendEmail: (state, action: PayloadAction<any>) => {
      // state.lastEmailed = new Date();
    }
  }
});

export const { sendEmail } = contactSlice.actions;
export default contactSlice.reducer;
