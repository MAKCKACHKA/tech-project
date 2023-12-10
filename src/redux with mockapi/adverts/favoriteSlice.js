import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorite: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.favorite.push({ ...action.payload });
    },
    removeProduct: (state, action) => {
      const idToRemove = action.payload;
      state.favorite = state.favorite.filter(item => item.id !== idToRemove);
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;

export const { addProduct, removeProduct } = favoriteSlice.actions;
