import { createSlice } from '@reduxjs/toolkit';

const state = {
  name: '',
  number: '',
  insta: '',
  email: '',
};

export const formSlice = createSlice({
  name: 'form',
  initialState: state,
  reducers: {
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeInsta: (state, action) => {
      state.insta = action.payload;
    },
    changeNumber: (state, action) => {
      state.number = action.payload;
    },
  },
});

export const formReducer = formSlice.reducer;

export const { changeEmail, changeInsta, changeName, changeNumber } =
  formSlice.actions;
