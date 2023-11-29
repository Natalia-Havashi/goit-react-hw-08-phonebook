import { configureStore} from '@reduxjs/toolkit';
import { contactReducer } from './Contacts/slice';
import { filterReducer } from './Contacts/filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';



const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}
export const store = configureStore({
  reducer: {
    auth:persistReducer(authPersistConfig,authReducer),
    contacts: contactReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      
    }),
    
});
export const persistor = persistStore(store)