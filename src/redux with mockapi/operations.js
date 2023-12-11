import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCars = createAsyncThunk(
  'adverts/fetchAll',
  async (page, thunkAPI) => {
    try {
      const url = new URL(
        `https://65737f2a063f876cec9cf90e.mockapi.io/adverts?page=${page}&limit=12`
      );
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchFiltered = createAsyncThunk(
  'adverts/fetchFilterd',
  async (_, thunkAPI) => {
    try {
      const url = new URL(
        `https://65737f2a063f876cec9cf90e.mockapi.io/adverts/`
      );
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
