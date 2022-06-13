import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './message';
import userReducer from './user';

const store = configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer,
  },
});

export default store;
export type AppDispatchType = typeof store.dispatch;
