import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import {fetchUsers} from "../async/fetchUsers";
import {usersType} from "../types/usersType";

export interface UsersState {
  users: usersType[],
  status: string,
  error: string,
}

const initialState: UsersState = {
  users: [],
  status: '',
  error: '',
}

const setError = (state, action: PayloadAction<string>) => {
  state.status = 'rejected';
  state.error = action.payload;
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsers: (state: UsersState, action: PayloadAction<usersType[]>) => {
      state.users = action.payload
    }
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.users = action.payload;
    },
    [fetchUsers.rejected]: setError,
  },
})

export const { getUsers } = usersSlice.actions

export default usersSlice.reducer