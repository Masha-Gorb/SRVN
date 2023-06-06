import {createAsyncThunk} from "@reduxjs/toolkit";

//так же типизировать в фетч альбумс
export const fetchPhotos  =  createAsyncThunk(
  'photos/fetchPhotos',
  async (albumId:string, {rejectWithValue}) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
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
