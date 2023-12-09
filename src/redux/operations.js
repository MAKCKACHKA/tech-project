import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65737f2a063f876cec9cf90e.mockapi.io/';

export const fetchParfums = createAsyncThunk(
  'data/fetchParfums',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts');
      console.log('2222', response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
