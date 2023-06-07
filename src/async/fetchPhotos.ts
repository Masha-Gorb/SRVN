import {createAsyncThunk} from "@reduxjs/toolkit";
import {PhotosType} from "../types/photosType";

export const fetchPhotos  =  createAsyncThunk<PhotosType[], string, { rejectValue: string }>(
  'photos/fetchPhotos',
  async (albumId:string, {rejectWithValue}) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}photos?albumId=${albumId}`);
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
