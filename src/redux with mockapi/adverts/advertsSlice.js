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

const hendleFulfield = (state, action) => {
  state.adverts.isLoading = false;
  state.adverts.error = null;

  const newItems = action.payload;
  newItems.forEach(newItem => {
    const existingItemIndex = state.adverts.items.findIndex(
      item => item.id === newItem.id
    );
    if (existingItemIndex === -1) {
      state.adverts.items.push(newItem);
    }
  });
};

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState: advertsState,
  reducers: {
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, hendleFulfield)
      .addCase(fetchCars.rejected, handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;

export const { updateFilter } = advertsSlice.actions;
