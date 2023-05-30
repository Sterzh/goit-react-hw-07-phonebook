import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../api/fetch';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchContactsThunk',
  async (_, thunkAPI) => {
    try {
      const response = await fetchContacts();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContactThunk',
  async (contact, thunkAPI) => {
    try {
      await addContact(contact);
      return contact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContactThunk',
  async (e, thunkAPI) => {
    try {
      const response = await deleteContact(e);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
