import { combineReducers } from 'redux';
import { advertsReducer } from './adverts/advertsSlice';
import { favoriteReducer } from './adverts/favoriteSlice';

export const reducer = combineReducers({
  adverts: advertsReducer,
  favorite: favoriteReducer,
});
