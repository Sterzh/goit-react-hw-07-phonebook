import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchContacts, addContact, deleteContact } from '../api/fetch';

axios.defaults.baseURL = 'https://647365b2d784bccb4a3c8dc6.mockapi.io/api/v1';

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
  async (id, thunkAPI) => {
    try {
      const response = await deleteContact(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
