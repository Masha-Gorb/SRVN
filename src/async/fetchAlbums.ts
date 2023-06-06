import {createAsyncThunk} from "@reduxjs/toolkit";


export const fetchAlbums  =  createAsyncThunk(
  'albums/fetchAlbums',
  async function(userID: string, {rejectWithValue}) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userID}`);
      if (!response.ok) {
        throw new Error('Server Error!');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
