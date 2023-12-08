import { combineReducers } from 'redux';
import { formReducer } from './parfums/formSlice';
import { shopingReducer } from './parfums/shopingSlice';
// import { contactReducer } from './contacts/contactsSlice';
// import { createContactReducer } from './contacts/createContact';

export const reducer = combineReducers({
  form: formReducer,
  cart: shopingReducer,
  // contactInfo: createContactReducer,
});
