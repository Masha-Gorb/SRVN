import {AnyAction, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {fetchAlbums} from "../async/fetchAlbums";
import {AlbumsType} from "../types/albumsType";

export interface AlbumsState {
  albums: AlbumsType[],
  status: string,
  error: string | null,
}

const initialState: AlbumsState = {
  albums: [],
  status: '',
  error: null,
}

export const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    getAllAlbums: (state: AlbumsState, action: PayloadAction<AlbumsType[]>) => {
      state.albums = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlbums.pending, (state: AlbumsState) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchAlbums.fulfilled, (state: AlbumsState, action: PayloadAction<AlbumsType[]>) => {
        state.status = 'resolved';
        state.albums = action.payload;
      })
      .addMatcher(isError, (state:AlbumsState, action: PayloadAction<string>) => {
        state.error = action.payload;
      });
  }
})

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

export const { getAllAlbums } = albumsSlice.actions

export default albumsSlice.reducer
