import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://65737f2a063f876cec9cf90e.mockapi.io/';

export const fetchCars = createAsyncThunk(
  'adverts/fetchAll',
  async (page, thunkAPI) => {
    try {
      const url = new URL(
        `https://65737f2a063f876cec9cf90e.mockapi.io/adverts?page=${page}&limit=12`
      );
      const response = await axios.get(url);
      // console.log(page);
      console.log(Date());
      // console.log(response);
      // console.log(url);

      // const response = await axios.get('/adverts');
      // console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (contact, thunkAPI) => {
//     try {
//       const response = await axios.post('/contacts', contact);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (contactId, thunkAPI) => {
//     // console.log(contactId);

//     try {
//       const response = await axios.delete(`/contacts/${contactId}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
