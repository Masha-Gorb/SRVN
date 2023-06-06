import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import {fetchPhotos} from "../async/fetchPhotos";
import {photosType} from "../types/photosType";

export interface PhotosState {
  photos: photosType[],
  status: string,
  error: string,
}

const initialState: PhotosState = {
  photos: [],
  status: '',
  error: '',
}
const setError = (state, action: PayloadAction<string>) => {
  state.status = 'rejected';
  state.error = action.payload;
}
export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    getAllPhotos: (state: PhotosState, action: PayloadAction<photosType[]>) => {
      state.photos = action.payload
    }
  },
  extraReducers: {
    [fetchPhotos.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchPhotos.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.photos = action.payload;
    },
    [fetchPhotos.rejected]: setError,
  },
})

export const { getAllPhotos } = photosSlice.actions
export default photosSlice.reducer