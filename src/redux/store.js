import { configureStore } from '@reduxjs/toolkit';
import { usersReduser } from './users/usersSlice';

const store = configureStore({
  reducer: {
    users: usersReduser,
  },
});

export default store;
