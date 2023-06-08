import {createAsyncThunk} from "@reduxjs/toolkit";
import {AlbumsType} from "../types/albumsType";


export const fetchAlbums  =  createAsyncThunk<AlbumsType[], string | undefined, { rejectValue: string }>(
  'albums/fetchAlbums',
  async function(userID, {rejectWithValue}) {
      const response = await fetch(`${import.meta.env.VITE_API_URL}albums?userId=${userID}`);
      if (!response.ok) {
        return rejectWithValue('Server Error!') ;
      }
    return await response.json();
  }
);
