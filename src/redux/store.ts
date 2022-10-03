import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import globalReducer from './slices/globalSlice';
import notificationReducer from './slices/notificationSlice';

enableMapSet();

const rootReducer = combineReducers({
  global: globalReducer,
  notification: notificationReducer
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: storage,
    whitelist: ['global']
  },
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
