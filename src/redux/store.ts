import { configureStore } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';

import notificationReducer from './slices/notificationSlice';

enableMapSet();

const store = configureStore({
  reducer: {
    notification: notificationReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
