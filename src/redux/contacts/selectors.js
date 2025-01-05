import { createSelector } from "@reduxjs/toolkit";

export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectIsError = (state) => state.contacts.isError;
export const selectContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.filters.name;

export const selectFilteredContactsMemo = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        (number && number.includes(normalizedFilter))
    );
  }
);
