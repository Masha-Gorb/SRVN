import {createAsyncThunk} from "@reduxjs/toolkit";
import {PhotosType} from "../types/photosType";

export const fetchPhotos  =  createAsyncThunk<PhotosType[], string, { rejectValue: string }>(
  'photos/fetchPhotos',
  async (albumId:string, {rejectWithValue}) => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}photos?albumId=${albumId}`);
      if (!response.ok) {
        return rejectWithValue('Server Error!');
      }
    return await response.json();
  }
);
