import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import Notification from '../../models/notification';

export const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    notificationList: new Map<number, Notification>(),
    id: 0
  },
  reducers: {
    add: (state, action: PayloadAction<Notification>) => {
      state.notificationList.set(state.id, action.payload);
      state.id++;
    },
    remove: (state, action: PayloadAction<number>) => {
      state.notificationList.delete(action.payload);
    }
  }
});

export const { add, remove } = notificationSlice.actions;
export default notificationSlice.reducer;
