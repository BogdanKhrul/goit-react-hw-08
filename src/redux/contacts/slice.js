import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { logout } from "../auth/operations";
import {
  fetchContacts,
  deleteContact,
  addContact,
} from "../contacts/operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(
          (contact) => contact.id !== payload.id
        );
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(logout.fulfilled, () => ({ ...initialState }))
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          deleteContact.pending,
          addContact.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          deleteContact.fulfilled,
          addContact.fulfilled
        ),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContact.rejected,
          addContact.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        }
      );
  },
});

export const { setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
