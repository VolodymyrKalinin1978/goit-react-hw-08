import { createSelector } from '@reduxjs/toolkit';
import Fuse from 'fuse.js';
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectSearchFilter = state => state.filters.name;

const fuseOptions = {
  keys: ['name', 'number'], 
  threshold: 0.3,
};

const fuse = new Fuse([], fuseOptions);

const performSearch = (contacts, searchFilter) => {
  fuse.setCollection(contacts);
  return fuse.search(searchFilter).map(result => result.item);
};

export const selectVisibleContacts = createSelector(
  [selectContacts, selectSearchFilter],
  (contacts, searchFilter) => {
    return performSearch(contacts, searchFilter);
  }
);
