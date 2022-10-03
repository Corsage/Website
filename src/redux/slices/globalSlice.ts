import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    waves: true
  },
  reducers: {
    toggleWaves: (state, action: PayloadAction<boolean>) => {
      state.waves = action.payload;
    }
  }
});

export const { toggleWaves } = globalSlice.actions;
export default globalSlice.reducer;
