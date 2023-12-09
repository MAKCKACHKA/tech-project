// import { reducer } from 'redux/reducer';
// import { createSelector } from 'reselect'
export const selectAdverts = state => state.adverts.adverts.items;

export const selectIsLoading = state => state.adverts.adverts.isLoading;

export const selectError = state => state.adverts.adverts.error;

export const selectFilter = state => state.adverts.filter;

export const selectName = state => state.contactInfo.name;

export const selectNumber = state => state.contactInfo.number;

// export const selectFilteredContacts = createSelector(
//   [selectContacts],
//   contacts => {
//     contacts.reduce(idToDelete =>
//       contacts.filter(contact => contact.id !== idToDelete)
//     );
//   }
// );

// reducers: {
//     updateFilter: (state, action) => {
//       state.filter = action.payload;
//     },
//     delContact: (state, action) => {
//       state.contacts.items = action.payload;
//     },
//   },
