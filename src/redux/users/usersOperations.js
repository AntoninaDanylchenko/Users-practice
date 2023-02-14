import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/';

export const fetchUsers = createAsyncThunk(
  'users/fathAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/users');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteUsers = createAsyncThunk(
  'users/deleteUser',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/users/${id}`, {
        headers: {
          authorization: 'admin',
        },
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addUser = createAsyncThunk(
  'users/addUser',
  async (newUser, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/users`, newUser);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changeUser = createAsyncThunk(
  'users/addUser',
  async (newUser, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/users`, newUser);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
