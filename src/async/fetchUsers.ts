import {createAsyncThunk} from "@reduxjs/toolkit";
import {UsersType} from "../types/usersType";

export const fetchUsers = createAsyncThunk<UsersType[], undefined, { rejectValue: string }>(
  'users/fetchUsers',
  async function(_, {rejectWithValue}) {
      const response = await fetch(`${import.meta.env.VITE_API_URL}users`);
      if (!response.ok) {
        return rejectWithValue('Server Error!');
      }
    return await response.json();
  }
);