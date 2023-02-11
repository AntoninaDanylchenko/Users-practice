import { createSlice } from '@reduxjs/toolkit';
import { deleteUsers, fetchUsers } from './usersOperations';

const initialUsersState = {
  users: [],
  isLoading: false,
  isError: null,
};

const pendingFetch = state => {
  state.isError = false;
  state.isLoading = true;
};
const rejectedFetch = (state, action) => {
  state.isError = action.payload;
  state.isLoading = false;
};

const usersSlice = createSlice({
  name: 'users',
  initialState: initialUsersState,
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, pendingFetch)
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isError = false;
        state.isLoading = false;
      })
      .addCase(fetchUsers.rejected, rejectedFetch)
      .addCase(deleteUsers.pending, pendingFetch)
      .addCase(deleteUsers.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        // const indexUser = state.users.findIndex(
        //   user => user.id === action.payload
        // );
        // state.users.splice(indexUser, 1);
        state.users = state.users.filter(user => user.id !== action.payload);
      })
      .addCase(deleteUsers.rejected, rejectedFetch);
  },
});

export const usersReduser = usersSlice.reducer;
