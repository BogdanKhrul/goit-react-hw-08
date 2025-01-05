import { goitApi } from "../auth/operations";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await goitApi.get("/contacts");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await goitApi.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contactData, { rejectWithValue }) => {
    try {
      const { data } = await goitApi.post("/contacts", contactData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
