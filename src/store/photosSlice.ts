import {AnyAction, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {fetchPhotos} from "../async/fetchPhotos";
import {PhotosType} from "../types/photosType";

export interface PhotosState {
  photos: PhotosType[],
  status: string,
  error: string | null,
}

const initialState: PhotosState = {
  photos: [],
  status: '',
  error: null,
}

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    getAllPhotos: (state: PhotosState, action: PayloadAction<PhotosType[]>) => {
      state.photos = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state: PhotosState) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPhotos.fulfilled, (state: PhotosState, action: PayloadAction<PhotosType[]>) => {
        state.status = 'resolved';
        state.photos = action.payload;
      })
      .addMatcher(isError, (state:PhotosState, action: PayloadAction<string>) => {
        state.error = action.payload;
      });
  }
})

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

export const { getAllPhotos } = photosSlice.actions
export default photosSlice.reducer