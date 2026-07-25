import {configureStore} from '@reduxjs/toolkit';
import counterSlice from '../Redux/CounterSlice';
import authSlice from '../Redux/AuthSlice';

import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    authReducer: authSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});
export default store;
