import {AnyAction, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {fetchUsers} from "../async/fetchUsers";
import {UsersType} from "../types/usersType";

export interface UsersState {
  users: UsersType[],
  status: string,
  error: string | null,
}

const initialState: UsersState = {
  users: [],
  status: '',
  error: null,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsers: (state: UsersState, action: PayloadAction<UsersType[]>) => {
      state.users = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state: UsersState) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state: UsersState, action: PayloadAction<UsersType[]>) => {
        state.status = 'resolved';
        state.users = action.payload;
      })
      .addMatcher(isError, (state:UsersState, action: PayloadAction<string>) => {
        state.error = action.payload;
      });
  }
})

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

export const { getUsers } = usersSlice.actions

export default usersSlice.reducer