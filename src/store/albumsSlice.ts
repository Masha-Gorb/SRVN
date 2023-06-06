import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import {fetchAlbums} from "../async/fetchAlbums";
import {AlbumsType} from "../types/albumsType";

export interface AlbumsState {
  albums: AlbumsType[],
  status: string,
  error: string,
}

const initialState: AlbumsState = {
  albums: [],
  status: '',
  error: '',
}

const setError = (state, action: PayloadAction<string>) => {
  state.status = 'rejected';
  state.error = action.payload;
}

export const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    getAllAlbums: (state: AlbumsState, action: PayloadAction<AlbumsType[]>) => {
      state.albums = action.payload
    }
  },
  extraReducers: {
    [fetchAlbums.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchAlbums.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.albums = action.payload;
    },
    [fetchAlbums.rejected]: setError,
  },
})

export const { getAllAlbums } = albumsSlice.actions

export default albumsSlice.reducer