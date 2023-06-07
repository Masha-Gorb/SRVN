import {createAsyncThunk} from "@reduxjs/toolkit";
import {UsersType} from "../types/usersType";

export const fetchUsers = createAsyncThunk<UsersType[]>(
  'users/fetchUsers',
  async function(_, {rejectWithValue}) {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}users`);
      if (!response.ok) {
        throw new Error('Server Error!');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);