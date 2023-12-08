import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  // counters: [],
};

const shopingSlice = createSlice({
  name: 'shoping',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.items.push({ ...action.payload, counter: 1 });
    },
    removeProduct: (state, action) => {
      const codeToRemove = action.payload;
      state.items = state.items.filter(item => item.code !== codeToRemove);
    },
    increase: (state, action) => {
      const codeToIncrease = action.payload;
      const productIndex = state.items.findIndex(
        item => item.code === codeToIncrease
      );
      if (productIndex !== -1) {
        state.items[productIndex].counter += 1;
      }
    },
    decrease: (state, action) => {
      const codeToDecrease = action.payload;
      const productIndex = state.items.findIndex(
        item => item.code === codeToDecrease
      );
      if (productIndex !== -1 && state.items[productIndex].counter > 1) {
        state.items[productIndex].counter -= 1;
      }
    },
  },
});

export const shopingReducer = shopingSlice.reducer;

export const { addProduct, removeProduct, increase, decrease } =
  shopingSlice.actions;
