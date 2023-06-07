import {createAsyncThunk} from "@reduxjs/toolkit";
import {AlbumsType} from "../types/albumsType";


export const fetchAlbums  =  createAsyncThunk<AlbumsType[], string, { rejectValue: string }>(
  'albums/fetchAlbums',
  async function(userID: string, {rejectWithValue}) {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}albums?userId=${userID}`);
      if (!response.ok) {
        throw new Error('Server Error!') ;
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
