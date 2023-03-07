import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { bookReducer } from './phonebook/phonebookSlice';
export const store = configureStore({
  reducer: {
    book: bookReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          persistStore,
          persistReducer,
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    });
  },
});

export const persistor = persistStore(store);
