import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from '../operations';
import { advertsState } from './advertsState';

const handlePending = state => {
  state.adverts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.adverts.isLoading = false;
  state.adverts.error = action.payload;
};

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState: advertsState,
  reducers: {
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
    // delContact: (state, action) => {
    //   state.adverts.items = action.payload;
    // },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.adverts.isLoading = false;
        state.adverts.error = null;
        state.adverts.items = action.payload;
      })
      .addCase(fetchCars.rejected, handleRejected);

    // .addCase(addContact.pending, handlePending)
    // .addCase(addContact.fulfilled, (state, action) => {
    //   state.adverts.isLoading = false;
    //   state.adverts.error = null;
    //   state.adverts.items.push(action.payload);
    // })
    // .addCase(addContact.rejected, handleRejected)

    // .addCase(deleteContact.pending, handlePending)
    // .addCase(deleteContact.fulfilled, (state, action) => {
    //   state.adverts.isLoading = false;
    //   state.adverts.error = null;
    //   state.adverts.items.filter(contact => contact.id !== action.payload);
    // })
    // .addCase(deleteContact.rejected, handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;

export const { updateFilter } = advertsSlice.actions;
