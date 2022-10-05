import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    waves: true,
    banner: true
  },
  reducers: {
    toggleWaves: (state, action: PayloadAction<boolean>) => {
      state.waves = action.payload;
    },
    toggleBanner: (state, action: PayloadAction<boolean>) => {
      state.banner = action.payload;
    }
  }
});

export const { toggleWaves, toggleBanner } = globalSlice.actions;
export default globalSlice.reducer;
