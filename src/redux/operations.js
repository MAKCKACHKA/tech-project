import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://makckachka.github.io/parfume-project-layout/';

// const parfums = fetch(
//   'https://makckachka.github.io/parfume-project-layout/parfume.json'
// )
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(
//         `Network response was not ok, status: ${response.status}`
//       );
//     }
//     return response.json();
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });

export const fetchParfums = createAsyncThunk(
  'data/fetchParfums',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/parfume.json');
      console.log('2222', response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//////////////////////////////////////////////////////////////

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    // console.log(contactId);

    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
