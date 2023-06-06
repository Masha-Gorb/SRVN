import {configureStore} from '@reduxjs/toolkit'
import usersReducer from './usersSlice';
import albumsReducer from './albumsSlice'
import photosReducer from './photosSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    albums: albumsReducer,
    photos: photosReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
